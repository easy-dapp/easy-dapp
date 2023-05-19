export default {
    logo: <span>Easy - dApp</span>,
    project: {
      link: 'https://github.com/phil-schmidtke/easy-dapp'
    },
    editLink: {
        text: '',
        component: ''
    },
    feedback: {
        content: '',
        labels: '',
        useLink: ''
    },
    darkMode: false,
    primaryHue: 280,
    useNextSeoProps() {
        return {
          titleTemplate: '%s – Easy dApp',
        }
      },
      footer: {
        text: (
          <span>
            Easy-dApp
          </span>
        )
      }
    // ...
  }