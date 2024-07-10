import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function LogicGame() {
    const [userValue, setUserValue] = React.useState("50");
    const onChange = (event) => {
        setUserValue(event.target.value);
    };

    const blockStyle = {
        width: '200px',
        height: '50px',
        backgroundColor: 'lightblue',
        margin: '10px auto',
        border: '1px solid black'
    };

    let fillStyle = {
        width: `${userValue}%`,
        height: '50px',
        margin: '0px 0px',
        backgroundColor: 'blue'
    };

    if (userValue > 100) {
        alert("число от 0 до 100!!!!!!!!!!!!!!!!!!!!!!!!")
        fillStyle = {
            width: `200px`,
            height: '50px',
            margin: '0px 0px',
            backgroundColor: 'blue'
        };
    }

    const [isOpen, setOpenClose] = React.useState(false);
    const press = () => {
        setOpenClose(!isOpen);
    }

    if (isOpen == false){
        return (
            <div>
                <p onClick={press}>И тогда сможете делать так (клик)</p>
                <hr color={"white"} align={"center"} width={"50%"}/>
            </div>
        );
    }

    if (isOpen == true){
        return (
            <div>
                <p onClick={press}>И тогда сможете делать так (клик)</p>
                <h3>Введите число от 0 до 100</h3>
                <form>
                    <label>
                        Число:
                        <input
                            type="number"
                            value={userValue}
                            onChange={onChange}
                            min={0}
                            max={100}
                        />
                    </label>
                </form>
                <div style={blockStyle}>
                    <div style={fillStyle}></div>
                </div>
                <hr color={"white"} align={"center"} width={"50%"}/>
            </div>
        );
    }
}

const listImg = ["logo_dvfu.png", "logo_imct.png"]

function Head() {

    const logoImages = listImg.map((img, index) =>
        <img key={index} src={img}/>
    );
    return (
        <div className="head">
            {logoImages}
        </div>
    )
}

function Textsite1() {

    return (
        <div>
            <h1>Учение - свет, неучение - тьма</h1>
            <h1>Век живи - век учись</h1>
            <br/>
            <hr color={"white"} align={"center"} width={"50%"}/>
            <br/>
            <h2>Учите REACT</h2>
        </div>

    )
}

function Textsite2() {

    return (
        <div>
            <h2>Учите JavaScript</h2>
        </div>

    )
}

function Content() {
    return (
        <>
            <Head />
            <Textsite1/>
            <LogicGame />
            <br/>
            <Textsite2/>
        </>
    )
}

root.render(<Content />)
