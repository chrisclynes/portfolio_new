import { pageSections } from "../App";

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
             {pageSections.map((item, i) => (
                <a 
                    href={`#${item}`} 
                    key={item+i}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: 'var(--secondary-color)', transform: "scale(1.3)"} : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots;