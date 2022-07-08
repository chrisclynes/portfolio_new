

const NavigationDots = ({ active }) => {
    const menuItems = ['home', 'about', 'projects', 'skills', 'contact' ];
    return (
        <div className="app__navigation">
             {menuItems.map((item, i) => (
                <a 
                    href={`#${item}`} 
                    key={item+i}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: 'var(--secondary-color)'} : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots;