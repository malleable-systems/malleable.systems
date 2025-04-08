{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    systems.url = "github:nix-systems/default";
    # Hugo 0.83.1
    nixpkgs-hugo.url = "github:NixOS/nixpkgs/df23c968285f443cca67600e91a2724fa3166c34";
  };

  outputs =
    {
      nixpkgs,
      systems,
      nixpkgs-hugo,
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
            pkgs-hugo = import nixpkgs-hugo {
              inherit system;
            };
          }
        );
    in
    {
      devShells = forEachSystem (
        { pkgs, pkgs-hugo }:
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              pkgs-hugo.hugo
              nodejs_22
            ];
          };
        }
      );
    };
}
