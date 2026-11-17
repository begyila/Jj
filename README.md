# LabGraph Pro 3.0.0 — Windows EXE Build

This repository contains build configuration for the Windows version of LabGraph Pro.

**Important:** The repository was public when the build scaffolding was added, so the proprietary LabGraph Pro application source and assets have intentionally **not** been uploaded.

Before uploading the application, change repository visibility to **Private** in Settings → General → Danger Zone → Change repository visibility.

## Building on GitHub

After making the repository private, add these files to the repository root:
- `app/index.html` (the complete LabGraph Pro 3.0.0 offline HTML app)
- `assets/app.ico` and `assets/app.png` (application icons)

The workflow at `.github/workflows/build-windows.yml` is configured to build the Windows x64 app when application files are pushed or when manually launched in Actions → Build LabGraph Pro Windows EXE.

Expected build outputs, **only after a successful GitHub Actions run**:
- `LabGraph-Pro-3.0.0-Portable.exe`
- `LabGraph-Pro-3.0.0-Setup.exe`

The EXEs are unsigned, so SmartScreen may show a warning. Test the app and all export functions on Windows before commercial distribution.

Electron builder packages the local HTML into a Windows desktop app; the program does not require internet access to load its bundled HTML at runtime.
