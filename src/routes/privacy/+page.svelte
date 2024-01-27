<script>
  const content = {
	termsAndConditions: [
		{
			title: 'Eligibility',
			paragraph: 'To use our services, you must be at least 18 years of age or above 18 and agree to adhere to all terms and conditions, privacy policies, and usage guidelines of the App.'
		},
		{
			title: 'Service Description',
			paragraph: 'Spartan Odx is an odds vessel that provides free and premium sporty booking tickets for novice ~ intermediate investors every weekend. Our services aim to grant users the ability to stake responsibly whiles leading them to victory and success.'
		},
		{
			title: 'Payment and Fees',
			paragraph: 'Fees for our services are outlined on odx.vercel.app and is subject to change without prior notice. Payment is due before you can access premium booking codes. We accept various forms of payment through secure and trusted channels.'
		},
		{
			title: 'Limitation of Liability',
			paragraph: 'Spartan Odx shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of data, profits, or business interruption.'
		},
		{
			title: 'Modifications to Terms',
			paragraph: 'We reserve the right to update or modify these terms and conditions at any time without prior notice. It is your responsibility to review the terms periodically for any changes.'
		},
		{
			title: 'Governing Law',
			paragraph: 'This Terms and Privacy Policy and any dispute arising out of or in connection with it shall be governed by and construed in accordance with the laws of Ghana, without giving effect to any principles of conflicts of law.'
		}
	],
	privacyPolicy: [
		{
			title: 'Responsible Gaming',
			paragraph: 'Users agree to engage in responsible gaming, which means not gambling more than they can afford to lose, setting realistic gaming goals, and being aware of potential problem gambling.'
		},
		{
			title: 'Minimum Age',
			paragraph: 'The App is designed for users who are 18 years old or older. Users below the age of 18 are not allowed to use the App.'
		},
		{
			title: 'Privacy and Security',
			paragraph: 'When you subscribe to our premium services, we collect the following information. Email Address Used for communication regarding your subscription, service updates, and important announcements. First and Last Name which Helps us personalize our communications with you.'
		},
		{
			title: 'Use of Information',
			paragraph: 'We use the collected information solely for the following purposes:'
		},
		{
			title: 'Service Provision',
			paragraph: 'To deliver the premium services you have subscribed to.'
		},
		{
			title: 'Data Security',
			paragraph: 'Your personal information is treated with utmost security. We implement measures to safeguard it from unauthorized access or disclosure.'
		},
		{
			title: 'Indemnification',
			paragraph: 'The User agrees to indemnify and hold harmless the App and its related entities from any claim, loss, damage, liability, or expense, arising from or in any way connected with the User\'s use of the App'
		},
		{
			title: 'Severability',
			paragraph: 'If any provision of this Policy is held to be invalid, unlawful, or unenforceable, the remaining provisions of this Policy will not be affected and will continue in full force and effect.'
		},
		{
			title: 'Contact Us',
			paragraph: 'If you have any questions or concerns about this Policy, please contact the App\'s customer support team at hokagefitz@gmail.com.'
		},
	]
  }
</script>

<div class="term">
  <div class="sectionX">
    <div class="privacy">
      <h1>Terms and Conditions</h1>
      <div>By using Spartan Odx Booking Ticket you agree to the following terms.</div>

			{#each content.termsAndConditions as {title, paragraph} (title)}
				<div><h3>{title}:</h3> {paragraph} </div>
			{/each}
		</div>

    <div class="privacy">
			<h1>Privacy Policy</h1>
			<div>By using Spartan Odx Booking Ticket you agree to the following privacy policy.</div>

			{#each content.privacyPolicy as {title, paragraph} (title)}
				<div><h3>{title}:</h3> {paragraph} </div>
			{/each}
    </div>
  </div>
  <a href="/">←  Return</a>
</div>

