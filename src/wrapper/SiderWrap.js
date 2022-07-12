import { NavigationDots, SocialMedia } from '../components';

const SiderWrap = (Component, idName ) => function HOC() {
    return (
        <div className="wrap__container">
            <SocialMedia />
            <Component />
            <NavigationDots active={idName}/>
        </div>
    )
}

export default SiderWrap;