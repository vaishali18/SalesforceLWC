# Salesforce Lightning Web Components

To create and develop Lightning Web Components and use their powerful features and performance benefits, you need to set up followings:

1. Install Salesforce CLI.
2. Install Visual Studio Code and extensions for Salesforce DX.

## Install Salesforce CLI

1. Install the CLI from [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli).
2. Confirm the CLI is properly installed and on the latest version by running the following command from the command line.
sfdx update
You should see output like sfdx-cli: Updating CLI....

## Install Visual Studio Code and extensions for Salesforce DX

1. Download and install the latest version of Visual Studio Code for your operating system. If you already have Visual Studio Code installed, there's no need to reinstall it.
2. Launch Visual Studio Code.
3. On the left toolbar, click the Extensions icon Visual Studio Code's Extension icon.
Search for Salesforce Extension Pack and click to Install.

Now that you've installed Visual Studio Code and enabled the necessary extensions, you need to test them out.

## Authorize Your Organization
1. In Visual Studio Code, open the Command Palette by pressing Ctrl+Shift+P (Windows) or Cmd+Shift+P (macOS).
2. Type SFDX.
3. Select SFDX: Authorize an Org.
4. Press Enter to accept the Project Default login URL option.
5. Press Enter to accept the default alias.
This opens the Salesforce login in a separate browser window.
6. Log in using your dev organization credentials.
7. If prompted to allow access, click Allow.

## Deploy to Organization
1. Right-click the default folder under force-app/main.
2. Click SFDX: Deploy Source to Org.
3. In the Output tab of the integrated terminal, view the results of your deployment. If the command ran successfully, a Deployed Source message lists the three files that were uploaded to the org.

## Add Component to App in Lightning Experience
1. In Visual Studio Code, open the Command Palette by pressing Ctrl+Shift+P (Windows) or Cmd+Shift+P (macOS).
2. Type SFDX.
3. Select SFDX: Open Default Org. This opens your organization in a separate browser.
4. From the App Launcher(), find and select Sales.
5. Click gear icon then select Edit Page.
6. Drag the helloWorld Lightning web component from the Custom area of the Lightning Components list to the top of the Page Canvas. (You can drag drop component you want to add in page).
7. Click Save.
8. Click Activate.
9. Click Assign as Org Default.
10. Click Save.
11. Click Save again, then click to return to the page.
12. Refresh the page to view your new component.

Refresh the page to view your new component.

## Read All About It

- [Introducing Lightning Web Components - Salesforce Lightning Component Library](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_introduction)
- [Explore Trailhead and Sample Code - Salesforce Lightning Component Library](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.install_sample_code_repo)
- [Access Static Resources - Salesforce Lightning Component Library](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_resources)
- [Components - Salesforce Lightning Component Library  - Ready to use built in components](https://developer.salesforce.com/docs/component-library/overview/components)