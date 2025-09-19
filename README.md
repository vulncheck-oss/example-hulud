# example-hulud

🏜️ Example repository demonstrating a CLI-powered GitHub Action that blocks PRs containing Shai-Hulud vulnerabilities.

## Overview

This repository showcases how to implement automated security scanning in your CI/CD pipeline using GitHub Actions. The demo includes:

- **Vulnerable Application**: A Node.js Express app (`vulnerable-app.js`) that contains intentional "Shai-Hulud" security vulnerabilities
- **Automated Scanner**: A GitHub Action workflow that scans for vulnerability patterns and blocks PRs when found
- **CLI Tool**: A bash-based scanner that detects various vulnerability patterns related to the fictional "Shai-Hulud" threat

## How It Works

1. **PR Creation**: When a pull request is opened against the `main` branch
2. **Automated Scan**: The GitHub Action runs a CLI scanner that searches for vulnerability patterns
3. **Pattern Detection**: The scanner looks for patterns like:
   - `shai-hulud` references
   - Hardcoded API keys with spice/arrakis themes
   - SQL injection vulnerabilities in sandworm tracking code
4. **Blocking**: If vulnerabilities are found, the workflow fails and blocks the PR merge

## Vulnerability Patterns

The scanner detects these "Shai-Hulud" vulnerability patterns:
- `shai-hulud` / `Shai-Hulud` / `SHAI-HULUD`
- `spice.*api.*key` (API key leaks)
- `sandworm.*sql` (SQL injection)
- `arrakis.*secret` (Hardcoded secrets)

## Demo Usage

⚠️ **For demonstration purposes only** - Do not use the vulnerable code in production!

The spice must flow, but vulnerabilities must not! 🐛
