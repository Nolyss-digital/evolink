import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo-dark.png';

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">

                    {/* ABOUT */}
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="evolink.io logo" />
                                </Link>

                                <Text>
                                    evolink.io facilite l’accès à des services essentiels en accompagnant
                                    les entreprises dans leurs transitions énergétique, numérique et
                                    juridique, avec clarté, fiabilité et conformité.
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} evolink.io. Tous droits réservés.
                                </Text>
                            </div>
                        </div>
                    </div>

                    {/* INFORMATIONS */}
                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Informations">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/notre-vision"}`}>Notre vision</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Nos expertises</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/media"}`}>Media</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    {/* SOCIAL */}
                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Suivez-nous">
                            <List classes="widget-list">
                                <LI><Link to="https://www.linkedin.com" target="_blank">LinkedIn</Link></LI>
                                <LI><Link to="https://twitter.com" target="_blank">X (Twitter)</Link></LI>
                                <LI><Link to="https://www.instagram.com" target="_blank">Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    {/* CONTACT */}
                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact">
                            <address>
                                evolink.io <br />
                                contact@evolink.io <br />
                                +33 (0)1 00 00 00 00
                            </address>
                        </Widget>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
