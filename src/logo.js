import m from 'mithril'
import bodymovin from 'lottie-web'


const makeLogo = ({ dom }) => {
  const svgContainer = dom;
  const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'https://lottie.host/d67ca5d8-423c-4cac-96ae-a9b25b89a49c/wE4jiOh8XE.json'
  });
}

const Logo = () => {
  return {
    oncreate: makeLogo,
    view: () => m('.#logo-container.lottie', {
      style: {
        width: 'var(--size)',
      }
    })
  }
}


export default Logo
