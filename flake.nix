{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    systems.url = "github:nix-systems/default";
    # Hugo 0.83.1
    nixpkgsHugo.url = "github:NixOS/nixpkgs/df23c968285f443cca67600e91a2724fa3166c34";
  };

  outputs =
    {
      nixpkgs,
      systems,
      nixpkgsHugo,
      ...
    }:
    let
      forEachSystem =
        f:
        nixpkgs.lib.genAttrs (import systems) (
          system:
          f {
            pkgs = import nixpkgs {
              inherit system;
            };
            pkgsHugo = import nixpkgsHugo {
              inherit system;
            };
          }
        );
    in
    {
      devShells = forEachSystem (
        { pkgs, pkgsHugo }:
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              pkgsHugo.hugo
              nodejs_22
            ];
          };
        }
      );
    };
}
