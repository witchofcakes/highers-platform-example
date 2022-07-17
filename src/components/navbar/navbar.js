import React from 'react';
import logo from '../../images/logo_full.png'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';



export default function Navbar() {

    const [state, setState] = React.useState({
        open: false,
        openEnter: false,
        openM: false,
        isLoggedIn: true,
        name: "Tanya Vasylieva",
        menuOpen: false,
    });

    const handleOpen = () => setState({open: true});
    const handleClose = () => setState({open: false});

    function handleOpenM(){
        setState({openM: true})
        console.log("popup")
    }

    function handleCloseM(){
        setState({openM: false})
        console.log("popupClose")
    }

    const handleOpenEnter = () => setState({openEnter: true});
    const handleCloseEnter = () => setState({openEnter: false});

    const isBigScreen = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    const isDesktop = useMediaQuery({
        query: '(min-width: 992px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width: 992px)'
    })
    const isMobile = useMediaQuery({
        query: '(max-width: 490px)'
    })

    function handleMenuClick() {
        setState({menuOpen: !state.menuOpen});
    }

    // function handleLinkClick() {
    //     setState({menuOpen: false});
    // }

    const styles=
        {
            container:{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: '99',
                opacity: 0.9,
                display:'flex',
                alignItems:'center',
                background: 'black',
                width: '100%',
                color: 'white',
            },
            logo: {
                margin: '0 auto',
            },
            body: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                filter: state.menuOpen ? 'blur(2px)':null,
                transition: 'filter 0.5s ease',
            },
        }
    const menu = [
        {title: 'Junior-вакансії', href: '/all-vacancies'},
        {title: 'Освітні можливості', href: '/all-opportunities'},
        {title: 'Працедавцю', href: '/employer'},
        {title: 'Контакти', href: '/contacts'},
    ]
    const menuItems = menu.map((val,index)=>{
        return (
            <MenuItem
                key={index}
                delay={`${index * 0.1}s`}
                // onClick={handleLinkClick}
                val={val.title}
                hrefs={val.href}
            />
        )
    });

    function openPopupbox() {

        const content = (
            <form>
                <div className="apply-vacancy-title-text">
                    <p className="apply-vacancy-title-popup">Подача на вакансію</p>
                    <p className="apply-vacancy-enter-popup">
                        <span className="span-popup-newline">
                            або <a className="enter-popup-text">Увійти</a>
                        </span>
                        <span className="span-popup-newline">
                            для миттєвої подачі
                        </span>
                    </p>
                </div>
                <div className="form-input-div">
                    <label className="label-form">Ім'я та прізвище</label>
                    <input type="text" className="input-field" placeholder="Ім'я Прізвище"/>
                </div>
                <div className="form-input-div">
                    <label className="label-form">Email</label>
                    <input type="text" className="input-field" placeholder="email@email.com"/>
                </div>

            </form>
        )
        PopupboxManager.open({

            content,
            config: {
                titleBar: {
                    enable: true,
                },
                fadeIn: true,
                fadeInSpeed: 500
            }

        })
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src={logo} className="logo-full" />
            </a>

            {
                isMobileOrTablet &&
                <MenuButton open={state.menuOpen} onClick={handleMenuClick} color='#1d1d1d'/>
            }
            {/*<button*/}
            {/*    className="navbar-toggler"*/}
            {/*    type="button"*/}
            {/*    data-toggle="collapse"*/}
            {/*    data-target="#navbarText"*/}
            {/*    aria-controls="navbarText"*/}
            {/*    aria-expanded="false"*/}
            {/*    aria-label="Toggle navigation"*/}
            {/*>*/}
            {/*    <span className="navbar-toggler-icon" />*/}
            {/*</button>*/}

            {
                isMobileOrTablet ?
                    <Menu open={state.menuOpen}>
                        {menuItems}
                        <div className="mobile-menu-buttons">
                            <a href="/login">
                                <button className="enter-button-mobile">
                                    Вхід
                                </button>
                            </a>
                            <a href="/login">
                                <button className="create-account-button-mobile">
                                    Створити акаунт
                                </button>
                            </a>
                        </div>
                    </Menu>
                    :
                    <div className="collapse navbar-collapse" id="navbarText">
                        {/*<div className="white-background">*/}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/all-vacancies">
                                    Junior-вакансії
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/all-opportunities">
                                    Освітні можливості
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/employer">
                                    Працедавцю
                                </a>
                            </li>
                        </ul>


                        {
                            state.isLoggedIn ?
                                <ul className="navbar-nav ml-auto">
                                    <a href="/candidate-profile" className="navbar-candidate-name-link">
                                        <p className="navbar-login-name">
                                            {state.name}
                                        </p>
                                    </a>
                                </ul>
                                :
                                <ul className="navbar-nav ml-auto">
                                    <div className="popup-signin-div">
                                        <button onClick={handleOpen} className="enter-button enter-margin">
                                            Вхід
                                        </button>
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={state.open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={state.open}>
                                                <div className="popup-container-signin">
                                                    <div className="box-popup-container-signin">
                                                        <div>
                                                            <div className="sign-in-popup-title-text text-align-center">
                                                                <p className="title-popup-signin color-text-main-signin">
                                                                    Працюй із задоволенням
                                                                </p>
                                                                <p className="title-popup-signin color-text-signin">
                                                                    та отримуй гідну зарплатню
                                                                </p>
                                                            </div>
                                                            <div className="popup-signin-google-button text-align-center">
                                                                {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}
                                                                <button className="google-button-signin">
                                                                    Вхід через Google
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </Modal>
                                    </div>
                                    <div>
                                        <button onClick={handleOpenEnter} className="round-button-border">
                                            Створити акаунт
                                        </button>
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={state.openEnter}
                                            onClose={handleCloseEnter}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={state.openEnter}>
                                                <div className="popup-container-signin">
                                                    <div className="box-popup-container-signin">
                                                        <div>
                                                            <div className="sign-in-popup-title-text text-align-center">
                                                                <p className="title-popup-signin color-text-main-signin">
                                                                    Працюй із задоволенням
                                                                </p>
                                                                <p className="title-popup-signin color-text-signin">
                                                                    та отримуй гідну зарплатню
                                                                </p>
                                                            </div>
                                                            <div className="popup-signin-google-button text-align-center">
                                                                {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}
                                                                <button className="google-button-signin">
                                                                    Реєстрація через Google
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </Modal>
                                    </div>
                                </ul>
                        }

                    </div>
            }
        </nav>
    )
}

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover:false,
        }
    }

    handleHover(){
        this.setState({hover:!this.state.hover});
    }

    render(){
        const styles={
            container: {
                opacity: '1',
                animation: '1s appear forwards',
                animationDelay:this.props.delay,
            },
            menuItem:{
                fontSize: '16px',
                padding: '1rem 0',
                margin: '0 5%',
                cursor: 'pointer',
                color: this.state.hover? 'gray':'#fafafa',
                transition: 'color 0.2s ease-in-out',
                animation: '0.5s slideIn forwards',
                animationDelay:this.props.delay,

            },
            line: {
                width: '90%',
                height: '1px',
                background: 'gray',
                margin: '0 auto',
                animation: '0.5s shrink forwards',
                animationDelay:this.props.delay,

            }
        }
        return(
            <div style={styles.container}>
                <div
                    style={styles.menuItem}
                    onMouseEnter={()=>{this.handleHover();}}
                    onMouseLeave={()=>{this.handleHover();}}
                    // onClick={this.props.onClick}
                >
                    <a href={this.props.hrefs} className="text-menu-mobile">
                        {this.props.val}
                    </a>
                </div>
                <div style={styles.line}/>
            </div>
        )
    }
}

/* Menu.jsx */
class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: this.props.open? this.props.open:false,
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }

    render(){
        const styles={
            container: {
                position: 'absolute',
                top: 0,
                left: 0,
                height: this.state.open? '100vh': 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: '#f7f7f7',
                opacity: 0.95,
                color: '#fafafa',
                transition: 'height 0.3s ease',
                zIndex: 2,
            },
            menuList: {
                paddingTop: '3rem',
            }
        }
        return(
            <div style={styles.container}>
                {
                    this.state.open?
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div>:null
                }
            </div>
        )

    }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: this.props.open? this.props.open:false,
            color: this.props.color? this.props.color:'black',
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }

    handleClick(){
        this.setState({open:!this.state.open});
    }

    render(){
        const styles = {
            container: {
                height: '32px',
                width: '32px',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '4px',
            },
            line: {
                height: '2px',
                width: '20px',
                background: 'black',
                transition: 'all 0.2s ease',
                zIndex: '33',
            },
            lineTop: {
                background: 'black',
                transform: this.state.open ? 'rotate(45deg)':'none',
                transformOrigin: 'top left',
                marginBottom: '5px',
            },
            lineMiddle: {
                background: 'black',
                opacity: this.state.open ? 0: 1,
                transform: this.state.open ? 'translateX(-16px)':'none',
            },
            lineBottom: {
                background: 'black',
                transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
                transformOrigin: 'top left',
                marginTop: '5px',
            },
        }
        return(
            <div style={styles.container}
                 onClick={this.props.onClick ? this.props.onClick:
                     ()=> {this.handleClick();}}>
                <div style={{...styles.line,...styles.lineTop}}/>
                <div style={{...styles.line,...styles.lineMiddle}}/>
                <div style={{...styles.line,...styles.lineBottom}}/>
            </div>
        )
    }
}