function initEmbeddedMessaging() {
    try {
      embeddedservice_bootstrap.settings.language = 'en'; // For example, enter 'en' or 'en-US'

      embeddedservice_bootstrap.init(
              '00DU0000000IF1g',
              'Veritone_In_App_Support_Chat_Messaging',
              'https://veritone-inc.force.com/ESWVeritoneInAppSuppor1663956198145',
              {
                scrt2URL: 'https://veritone.my.salesforce-scrt.com'
              }
      );
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  }

  window.openSalesforceChatWindow = () => {
    const embeddedMessagingConversationButton = document.getElementById("embeddedMessagingConversationButton")
    const embeddedMessagingIconContainer = document.getElementById("embeddedMessagingIconContainer")
    const embeddedMessagingLoadingSpinner = document.createElement("div")
  
    if (embeddedMessagingConversationButton && embeddedMessagingIconContainer) {
      embeddedMessagingLoadingSpinner.setAttribute("id", "embeddedMessagingLoadingSpinner")
      embeddedMessagingIconContainer.appendChild(embeddedMessagingLoadingSpinner)
    }
  
    try {
      embeddedservice_bootstrap.createFilePreviewFrame();
      embeddedservice_bootstrap.createIframe();
    } catch (err) {
      console.log('Error opening Embedded Messaging', err);
    }
  }
