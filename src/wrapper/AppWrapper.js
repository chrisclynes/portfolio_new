
const AppWrapper = (Component, idName, classNames ) => function HOC(props) {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <div className="app__wrapper app__flex">
                <Component {...props} />
            </div>
        </div>
    )
}

export default AppWrapper;