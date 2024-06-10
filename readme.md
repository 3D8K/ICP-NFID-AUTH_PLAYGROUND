# Web3 Signature and Authorization Testing Stand

This project is a test stand for testing signatures and authorization via Web3 using NFID and Internet Computer Protocol (ICP).

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Contact](#contact)

## Description

This project provides a platform for testing signatures and authorizations for Web3 applications using NFID and ICP. It includes tools and scripts to facilitate the deployment and interaction with smart contracts.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js and npm](https://nodejs.org/)
- [DFINITY Canister SDK (dfx)](https://dfinity.org/developers)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Generate type files:
   ```bash
   dfx generate
   ```

## Running the Project

1. Start the DFX network in a separate terminal:

   ```bash
   dfx start --clean --background
   ```

2. Navigate to the project root and deploy the canisters:

   ```bash
   dfx deploy
   ```

3. Wait for the build to complete. Once done, follow the URLs provided in the terminal to access your deployed project.

   The terminal will display URLs where you can access and interact with your project.
   Make sure to copy these URLs and open them in your web browser.
