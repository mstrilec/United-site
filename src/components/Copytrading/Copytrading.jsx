/* eslint-disable no-irregular-whitespace */
import React from "react";
import './Copytrading.css'
import Button from '../Button/Button'
import Pluses from '../Pluses/Pluses'
import Plan from '../Plan/Plan'
import Icon1 from '../../assets/pluses-icon1.png'
import Icon2 from '../../assets/pluses-icon2.png'
import Icon3 from '../../assets/pluses-icon3.png'
import Icon4 from '../../assets/pluses-icon4.png'
import Icon5 from '../../assets/pluses-icon5.png'
import Icon6 from '../../assets/pluses-icon6.png'
import Plan_Icon1 from '../../assets/plan-icon1.png'
import Plan_Icon2 from '../../assets/plan-icon2.png'
import Plan_Icon3 from '../../assets/plan-icon3.png'
import Community from '../../assets/community.png'
import CopytradingImg from '../../assets/copytrading.png'
import TestImage from '../../assets/testimage.png'
import Copytrading_Mob_Down from '../../assets/copytrading-mob-down.png'
import Copytrading_Mob_Right from '../../assets/copytrading-mob-right.png'
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import leftVector from '../../assets/left-vector.svg'
import rightVector from '../../assets/right-vector.svg'
import mobileVector from '../../assets/mobile-vector.svg'

const Copytrading = () => {

    return(
        
        <copytrading className="copytrading">
            <div className="copytrading-main">

                <div className="copytrading-maintop">
                    <div className="copytrading-title">Copy</div>
                    <img className="copytrading-img" src={CopytradingImg}></img>
                    <img className="copytrading-mob-down" src={ Copytrading_Mob_Down}></img>
                    <div className="copy-img-r">
                        <img className="copytrading-mob-right" src={ Copytrading_Mob_Right}></img>
                    </div>
                    <div className='copytrading-text'>Trading</div>

                    <div className='copytrading-mobile-text'>
                        <div className="copytrading-title mobile-copy-title">Copy <a className='copytrading-text mobile-copy-text'>Trading</a> </div>
                    </div> 
                    
                </div>
        </div>


        <div className='copytrading-maingreen'>
                <div className='copytrading-maindown'>
                    <div className='copytrading-downtext'>
                        Invest like United’s top investors
                    </div>

                    <div className='copytrading-downtext mobile-copytrading'>
                        Invest like <br/> United’s top investors
                    </div>

                    <Link to='/signup'>
                        <Button
                            name='START COPYING'
                            color='#D6ECDF'
                            type='secondary'
                            corner='#319f60'
                            width='186px'
                        />
                    </Link>

                    </div>
                </div>

        <div className='copytrading-pluses'>

            <div className="plus-title">
                Why copy top-performing traders?
            </div>

            <div className="plus-title mobile-title-plus">
                Why copy<br/> top-performing <br/>traders?
            </div>

            <div className='plus-subtitle'>
              Invest like our best-performing traders: simply choose an investor to copy, and when <br/>they trade, so do you.
            </div>

            <div className='plus-subtitle mobile-subtitle-plus'>
              Invest like our best-performing traders:
              <br/> simply choose an investor to copy, and
              <br/> when they trade, so do you.
            </div>

            <div className='plus'>
                <div className='plus-top'>
                    <div className='plus-item'>
                        <Pluses
                        img={Icon1}
                        title='User-friendly'
                        text={
                            <>
                               Start/stop copying and add/remove funds <br/> at any time
                            </>
                        }
                        />
                    </div>

                    <div className='plus-item'>
                        <Pluses
                        img={Icon2}
                        title='Automatic'
                        text={
                            <>
                               Copied trades are replicated to your <br/>portfolio in real time
                            </>
                        }
                        />
                    </div>

                    <div className='plus-item'>
                        <Pluses
                        img={Icon3}
                        title='Invest with invested traders'
                        text={
                            <>
                               Buy the assets they buy for themselves
                            </>
                        }
                        />
                    </div>
                </div>

                <div className='plus-down'>

                <div className='plus-item'>
                        <Pluses
                        img={Icon4}
                        title='Copying is free'
                        text={
                            <>
                               No additional charges for using the <br/> CopyTrader feature
                            </>
                        }
                        />
                    </div>

                    <div className='plus-item'>
                        <Pluses
                        img={Icon5}
                        title='Save time'
                        text={
                            <>
                               Manage your portfolio without having to <br/>constantly watch the markets
                            </>
                        }
                        />
                    </div>

                    <div className='plus-item'>
                        <Pluses
                        img={Icon6}
                        title='Leverage their expertise'
                        text={
                            <>
                               Benefit from their knowledge and <br/> experience
                            </>
                        }
                        />
                    </div>

                </div>
            </div>

             <div className='plus-button'>

                <Link to='/signup'>
                    <Button
                        name='join now'
                        color='#277F4D'
                        type='primary'
                        corner='#fff'
                        width='173px'
                    />
                </Link>
                </div>
        </div>

        <div className='work-plan'>
            <ReactSVG src={leftVector} className="work-plan-left-vector" />
            <div className='plans-title'>
                How it works
            </div>
            
            <div className='plans-subtitle'>
                Copy Trading is built to be simple and intuitive. Just find the trader you wish to copy<br/>
                through the <Link to='/signup' className="plans-subtitle-span">Copy Trading</Link> page – there, you can search for<br/>
                the kind of trader you’re looking for.
            </div>

            <div className='plans-subtitle mobile-plans'>
                Copy Trading is built to be simple and <br/>
                intuitive. Just find the trader you wish to<br/>
                copy through the <Link to='/signup' className="plans-subtitle-span">Copy Trading</Link><br/>
                page – there, you can<br/>
                search for the kind of trader you’re<br/> 
                looking for.
            </div>

            <div className='plans-items'>

                <div className='plan-item'>
                    <Plan
                        img={Plan_Icon1}
                        title='Select a trader'
                        />
                    </div>

                <div className='plan-item'>
                    <Plan
                        img={Plan_Icon2}
                        title='Hit the COPY button'
                        />
                    </div>

                <div className='plan-item'>
                    <Plan
                        img={Plan_Icon3}
                        title='Choose how much to allocate'
                        />
                    </div>

            </div>
            <ReactSVG src={rightVector} className="work-plan-right-vector" />
            <ReactSVG src={mobileVector} className="work-plan-mobile-vector" />
        </div>

        <div className="copytrading-community">
            <div className='left-community'>

                <div className='title-community'>
                    <div className='title-community1'>
                        Backed by <d className='title-community2'>community</d>
                    </div>
                </div>

                <div className="text-community">
                    Join the largest collaborative community of traders and investors<br/>
                    in the world — a place to connect, share, and learn from other<br/>
                    experienced investors. Chat with them, discuss strategies and<br/>
                    benefit from their knowledge.
                </div>

                <div className="text-community-mob">
                    Join the largest collaborative community<br/> 
                    of traders and investors<br/>
                    in the world — a place to connect, share,<br/>
                    and learn from other<br/>
                    experienced investors. Chat with them,<br/>
                    discuss strategies and<br/>
                    benefit from their knowledge.
                </div>

                <div className='button-community'>
                <Link to='/signup'>
                    <Button
                        name='Discover Traders'
                        color='#277F4D'
                        type='primary'
                        fix='fix-button-corners'
                        corner='#fff'
                        width='220px'
                    />
                </Link>
                </div>

                <div className='subtile-community'>
                    Copy Trading does not amount to investment advice. The value of your investments <br/>
                    may go up or down. Your capital is at risk.
                </div>

                <div className='subtile-community-mob'>
                    Copy Trading does not amount to investment advice. The<br/> value of your investments <br/>
                    may go up or down. Your capital is at risk.
                </div>



            </div>

            <div className='right-community'>
                <div className='right-img-com'>
                    <img className='community-image' src={Community}></img>
                </div>
            </div>
        </div>


        <div className='copytrading-test'>
            <div className='copytrading-container'>

                <div className='left-test'>
                    <img className='test-image' src={TestImage}></img>
                </div>

                <div className='right-test'>
                    <div className='test-title'>
                        Take it for <d className='test-title1'>a test drive</d>
                    </div>

                    <div className='test-text'>
                        Want to try CopyTrader without risking any capital? <a className="test-test-green">Try it in demo</a><br/>
                        Every United account includes a free $100,000 virtual portfolio for you <br/>
                        to practise with.
                    </div>

                    <div className='test-text-mob'>
                        Want to try CopyTrader without risking <br/>any capital? <a className="test-test-mob">Try it in demo</a><br/>
                        Every United account includes a free<br/> $100,000 virtual portfolio for you to <br/>
                        practise with.
                    </div>

                    <div className='join-united'>
                    <Link to='/signup' className="test-button">
                        <Button
                            name='Join United'
                            color='#D6ECDF'
                            type='secondary'
                            corner='#131514'
                            fix='fix-button-corners'
                            width='159px'
                        />
                    </Link>
                    </div>

                    <div className='subtitle-test'>
                        United is a multi-asset investment platform. The value of your investments may go up or down. Your capital is at risk.
                    </div>

                    <div className='subtitle-test-mob'>
                        United is a multi-asset investment platform. The value of your investments may go up or down. Your capital is at risk.
                    </div>


                </div>
            </div>
        </div>
        </copytrading>
    )
}

export default Copytrading