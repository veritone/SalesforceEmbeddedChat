<script type='text/javascript'>
	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = ''; // For example, enter 'en' or 'en-US'

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
	};
</script>
<script type='text/javascript' src='https://veritone-inc.force.com/ESWVeritoneInAppSuppor1663956198145/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
