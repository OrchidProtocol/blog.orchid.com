---
templateKey: blog-post
public: true
url: orchid-is-now-available-in-beta-for-windows-command-line
title: "Orchid is now available in beta for Windows command line"
date: 1607522400001
description: "We're excited to announce that Orchid's command line client is now available for Windows. This beta release represents further momentum toward a full desktop client with a complete GUI and interface for Windows."
featuredpost: true
featuredimage: /img/uploads/Orchid_BlogImage_WinCLI.png
tags:
  - Company Updates
  - VPN
---
We're excited to announce that Orchid's command line client is now available for Windows. This beta release represents further momentum toward a full desktop client with a complete GUI and interface for Windows.

Internet privacy tools have never been more important for workers in many industries and locations, who continue to work remotely due to the ongoing covid pandemic. Earlier this year the Orchid team made the decision to prioritize desktop clients, starting with MacOS in the spring. The launch of the Windows client beta continues this momentum.

> "The Windows beta launch represents a key milestone for Orchid, making its privacy solution available to more desktop users than ever," said Orchid co-founder and CEO Dr. Steven Waterhouse. "With many people continuing to work remotely for the foreseeable future, this release is an important step in ensuring everyone is able to use the Internet in safety and privacy."

In addition to Windows, Orchid is available for [iOS and MacOS in the App Store](https://apps.apple.com/us/app/orchid-secure-networking/id1474884867), for Android in the  [Play Store](https://play.google.com/store/apps/details?id=net.orchid.Orchid&hl=en_US), and for [Linux](https://github.com/OrchidTechnologies/orchid/releases). Download Orchid today to start exploring the Internet freely.

## Instructions for downloading the Windows command line

*Note: this is an early beta release that requires some effort on the command line in addition to manually editing files and installing a driver. Thank you for trying out our beta! Our product team would love to hear your feedback or help needed on our [Telegram channel.](https://www.t.me/OrchidOfficial)*

### Download the Orchid client for Windows on Github

- Go to the [Orchid releases page](https://github.com/OrchidTechnologies/orchid/releases)
- Download the most recent `orchidcd-win_.0.x.x.exe` file

    **orchidcd**-win\_.0.x.x.exe is the client, the other **orchidd**-win\_.0.x.x.exe executable is the server

### Install the OpenVPN Tap driver

- Download the Tap driver here: <https://build.openvpn.net/downloads/releases/tap-windows-9.24.2-I601-Win10.exe>
- Run the exe file and follow the prompts to install the Tap driver

### Find your account information

- 'Copy' an Orchid account from the App or DApp to your clipboard
    - To copy from the app\
    ![Copy from the App](/img/uploads/windows-cli-1.png)
    - Alternatively, to copy from the DApp (note you will need a created account in the DApp that is funded with OXT in order for this to work. You will need to [follow the directions](https://www.orchid.com/join) and use ETH to submit the two transactions to create the account)\
    ![Copy from the DApp](/img/uploads/windows-cli-2.png)
<style>img[alt="Copy from the App"] {max-width: 300px}</style>

- Paste into Notepad (or your text editor of choice). It should look like this but with your own funder address and signer secret key:
    ```js
    account={protocol:"orchid", funder:"0x27FB8EDCf854602704fE8438243d0959219DB126", secret:"801850750644b7781b04bde917cf4aa095211c59ed86c12b5288844917b26ff3"}
    ```

### Prepare your configuration file

- Paste the following config file structure into a text editor:
    ```js
    hops = [{curator: "partners.orch1d.eth", protocol: "orchid", funder: "<your_funder>", secret: "<your_secret>"}];
    rpc = "https://cloudflare-eth.com/";
    ```

- Copy over your funder and secret into the funder and secret sections above

- The final format should look like this, except you have your own funder and signer secret instead of the zeros here. **Note: funder starts with 0x and secret does not**
    ```js
    hops = [{curator: "partners.orch1d.eth", protocol: "orchid", funder: "0x000000000000000000000000000000000000000", secret: "00000000000000000000000000000000000000000000000000000000000000000"}];
    rpc = "https://cloudflare-eth.com/";
    ```

- Save the file as `'orchid.cfg'`

    - In Notepad, you will need to make sure `.txt` is not appended. To do that, when you hit Save, select the “Save as type” dialog box and select “All Files.” This will allow you to save the file with the `.cfg` file extension.

    - Save as `'orchid.cfg'` and make sure it is in the same folder as the .exe file\
    ![save as "orchid.cfg"](/img/uploads/windows-cli-3.png)

### Run the Orchid client

- Open the command prompt as Administrator
    - Click the Start/Windows icon button
    - Type `CMD`
    - Right click the Command Prompt icon and select `"Run as administrator"`
- At the command line prompt, navigate to the folder where you downloaded the .exe and saved the .cfg file
    - An easy way to do this is to copy the file path from the File Explorer top bar and then typing the command `"dir <pasted in filepath>"`
- To run orchid, type `'orchidcd-win.exe --config orchid.cfg'`
- To stop, terminate the program using CTRL+C
