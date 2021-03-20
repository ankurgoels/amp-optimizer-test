import Head from "next/head";
import React from 'react';

export const config = { amp: true };

export default function AmpTest({ res }) {
		const data = res.data;
        const jobLocation = data.jobLocation;
        const url = "/job/1";
		
        const ApplyBtn = (
            <div>
                <button
                    id="apply-btn"
                    on="tap:apply-btn.hide,subscribe-form.show"
                    className="button-3d bg-blue-light button-center border-blue-dark uppercase ultrabold">Apply Online</button>
                <div id="subscribe-form" hidden>
                    <h6 className="center-text">
                        <i className="fa fa-info-circle"></i> Before proceeding, would you like to opt-in for a daily email update for similar jobs?
                    </h6> 
                    <form
                method="POST"
                action-xhr={url}
                target="_top"
                on="submit:subscribe-form.hide,subscribe-processing.show,error-message.hide;
                  submit-error:subscribe-processing.hide,subscribe-form.show,error-message.show,AMP.setState({'message': event.response.message || 'Whoops! Something went wrong.'});
                  submit-success:redirecting.show,subscribe-processing.hide;
                  "
            >
                <div id="error-message" className="bg-red-dark center-text" data-amp-bind-text="message" hidden>Test</div>
                <input type="email"
                       name="email"
                       placeholder="Please enter your email here"
                       className="input-bar"
                       required
                />
                <input type="hidden"
                       name="value"
                       value="1"
                       required />
                <input type="hidden"
                       name="type"
                       value="3"
                       required />
                <input type="submit"
                       id="subscribe-submit-btn"
                       className="button-3d bg-blue-light button-center border-blue-dark uppercase ultrabold"
                       value="Subscribe" />

                <div id="take-to-page">
					<div>
						<a className="center-text" href="#">
							No thanks, take me to the apply page <i className="fa fa-external-link"></i>
						</a>
						<br/>
					</div>
                </div>
            </form>

                </div>
                <button id="subscribe-processing" className="button-3d bg-yellow-light button-center border-night-dark uppercase ultrabold" hidden disabled><i className="fa fa-cog fa-spin"/> Processing</button>
                <div id="redirecting" hidden>
                    <button className="button-3d bg-green-light button-full border-green-light uppercase ultrabold" disabled>Redirecting... Please wait</button>
                </div>
            </div>
        );
        const ExpiredBtn = (
            <a className="button-3d bg-btn-expired button-center uppercase ultrabold">
                Job Expired
            </a>
        );

        const JobPosting = (
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data.meta_data)}} />
        );

	return (
		<div>
                <amp-sidebar id="sidebar" layout="nodisplay" side="left">
                    <div className="sidebar-header">
                        <a className="sidebar-logo" href="/">
                            <amp-img
                                src="https://i.judge.sh/Rare/5qKPERfA.png" width="114"
                                height="30"
                            />
                        </a>
                    </div>
                    <ul className="menu">
                        <li><a href="/" target="_blank"><i className="fa fa-angle-right" aria-hidden="true"></i> Home</a></li>
                        <li><a href="/cms/about-us" target="_blank"><i className="fa fa-angle-right" aria-hidden="true"></i> About Us</a></li>
                        <li><a href="/contact_us" target="_blank"><i className="fa fa-angle-right" aria-hidden="true"></i> Contact Us</a></li>
                        <li><a href="/cms/privacy-policy" target="_blank"><i className="fa fa-angle-right" aria-hidden="true"></i> Privacy Policy</a></li>
                        <li><a href="/cms/terms-of-use" target="_blank"><i className="fa fa-angle-right" aria-hidden="true"></i> Terms Of Use</a></li>
                    </ul>
                    <div className="sidebar-deco"></div>
                    <em className="sidebar-copyright">Copyright. All rights reserved.</em>
                </amp-sidebar>

                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
                    <title>TEST TITLE</title>
                    <meta property="og:type" key="og:type" content="website" />
                    <meta name="theme-color" key="theme-color" content="#ec8c3d" />
					<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js" key="amp-form" /> 
                </Head>
                <style jsx global amp-boilerplate>{`
                        body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
                        `}</style>
                <style jsx global>{`
                        body{font-family:Open Sans, sans-serif; font-size:13px; background-color:#ececec;}
                        .page-content ul {list-style-type: none;}
                        .input-bar{height: 55px;width: 100%;border: 0;border-bottom: 2px solid rgba(0, 0, 0, 0.15);background: transparent;
                                padding-left: 10px;outline: none;margin-right: 30px;font-size: larger;margin-bottom: 20px;}
                        /*Color Schemes and Colors*/
                        .jb-search-btn {background-color:#3c7f7f; color:#FFFFFF}
                        .bg-btn-expired {color: #212529;background-color: #ffc107;border-color: #ffc107;}
                        .bg-teal-light{ background-color: #1abc9c; color:#FFFFFF}
                        .bg-teal-dark{  background-color: #16a085; color:#FFFFFF}
                        .border-teal-light{ border:solid 1px #1abc9c;}
                        .border-teal-dark{  border:solid 1px #16a085;}
                        .color-teal-light{ color: #1abc9c;}
                        .color-teal-dark{  color: #16a085;}
                        .bg-green-light{background-color: #2ecc71; color:#FFFFFF}
                        .bg-green-dark{background-color: #2abb67; color:#FFFFFF}
                        .border-green-light{border:solid 1px #2ecc71;}
                        .border-green-dark{ border:solid 1px #2abb67;}
                        .color-green-light{color: #2ecc71;}
                        .color-green-dark{color: #2abb67;}
                        .bg-blue-light{background-color: #3498db; color:#FFFFFF}
                        .bg-blue-dark{background-color: #2980b9; color:#FFFFFF;}
                        .border-blue-light{border:solid 1px #3498db;}
                        .border-blue-dark{ border:solid 1px #2980b9;}
                        .color-blue-light{color: #3498db;}
                        .color-blue-dark{color: #2980b9;}
                        .bg-magenta-light{background-color: #9b59b6; color:#FFFFFF}
                        .bg-magenta-dark{background-color: #8e44ad; color:#FFFFFF}
                        .border-magenta-light{border:solid 1px #9b59b6;}
                        .border-magenta-dark{ border:solid 1px #8e44ad;}
                        .color-magenta-light{color: #9b59b6;}
                        .color-magenta-dark{color: #8e44ad;}
                        .bg-night-light{background-color: #34495e; color:#FFFFFF}
                        .bg-night-dark{background-color: #2c3e50; color:#FFFFFF}
                        .border-night-light{border:solid 1px #34495e;}
                        .border-night-dark{ border:solid 1px #2c3e50;}
                        .color-night-light{color: #34495e;}
                        .color-night-dark{color: #2c3e50;}
                        .bg-yellow-light{background-color: #E67E22; color:#FFFFFF}
                        .bg-yellow-dark{background-color: #e86f2a; color:#FFFFFF}
                        .border-yellow-light{border:solid 1px #E67E22;}
                        .border-yellow-dark{ border:solid 1px #F27935;}
                        .color-yellow-light{color: #f1c40f;}
                        .color-yellow-dark{color: #f39c12;}
                        .bg-orange-light{background-color: #F9690E; color:#FFFFFF}
                        .bg-orange-dark{background-color: #D35400; color:#FFFFFF}
                        .border-orange-light{border:solid 1px #F9690E;}
                        .border-orange-dark{ border:solid 1px #D35400;}
                        .color-orange-light{color: #e67e22;}
                        .color-orange-dark{color: #d35400;}
                        .bg-red-light{background-color: #e74c3c; color:#FFFFFF}
                        .bg-red-dark{background-color: #c0392b; color:#FFFFFF}
                        .border-red-light{border:solid 1px #e74c3c;}
                        .border-red-dark{ border:solid 1px #c0392b;}
                        .color-red-light{color: #e74c3c;}
                        .color-red-dark{color: #c0392b;}
                        .bg-pink-light{background-color: #fa6a8e ; color:#FFFFFF}
                        .bg-pink-dark{background-color: #FB3365 ; color:#FFFFFF}
                        .border-pink-light{border:solid 1px #fa6a8e ;}
                        .border-pink-dark{ border:solid 1px #FB3365 ;}
                        .color-pink-light{color: #fa6a8e;}
                        .color-pink-dark{color: #FB3365;}
                        .bg-gray-light{background-color: #bdc3c7; color:#FFFFFF}
                        .bg-gray-dark{background-color: #95a5a6; color:#FFFFFF}
                        .border-gray-light{border:solid 1px #bdc3c7;}
                        .border-gray-dark{ border:solid 1px #95a5a6;}
                        .color-gray-light{color: #bdc3c7;}
                        .color-gray-dark{color: #95a5a6;}
                        .bg-white{background-color:#FFFFFF;}
                        .color-white{color:#FFFFFF;}
                        .border-white{border:solid 1px #FFFFFF;}
                        .bg-black{background-color:#000000;}
                        .color-black{color:#000000;}
                        .border-black{border:solid 1px #000000;}
                        .color-heading{color:#676767;}

                        /*Social Icons*/
                        .facebook-bg{background-color:#3b5998; color:#FFFFFF;}
                        .linkedin-bg{background-color:#0077B5; color:#FFFFFF;}
                        .twitter-bg{background-color:#4099ff; color:#FFFFFF;}
                        .google-plus-bg{ background-color:#d34836; color:#FFFFFF;}
                        .whatsapp-bg{ background-color:#34AF23; color:#FFFFFF;}
                        .pinterest-bg{ background-color:#C92228; color:#FFFFFF;}
                        .sms-bg{ background-color:#27ae60; color:#FFFFFF;}
                        .mail-bg{ background-color:#3498db; color:#FFFFFF;}
                        .dribbble-bg{ background-color:#EA4C89; color:#FFFFFF;}
                        .tumblr-bg{ background-color:#2C3D52; color:#FFFFFF;}
                        .reddit-bg{ background-color:#336699; color:#FFFFFF;}
                        .youtube-bg{ background-color:#D12827; color:#FFFFFF;}
                        .phone-bg{ background-color:#27ae60; color:#FFFFFF;}
                        .skype-bg{ background-color:#12A5F4; color:#FFFFFF;}
                        .facebook-color{    color:#3b5998;}
                        .linkedin-color{    color:#0077B5;}
                        .twitter-color{     color:#4099ff;}
                        .google-color{      color:#d34836;}
                        .whatsapp-color{    color:#34AF23;}
                        .pinterest-color{   color:#C92228;}
                        .sms-color{         color:#27ae60;}
                        .mail-color{        color:#3498db;}
                        .dribbble-color{    color:#EA4C89;}
                        .tumblr-color{      color:#2C3D52;}
                        .reddit-color{      color:#336699;}
                        .youtube-color{     color:#D12827;}
                        .phone-color{       color:#27ae60;}
                        .skype-color{       color:#12A5F4;}

                        /*Background Images*/
                        .bg-1{background-image:url(images/pictures/1.jpg)}
                        .bg-2{background-image:url(images/pictures/2.jpg)}
                        .bg-3{background-image:url(images/pictures/3.jpg)}
                        .bg-4{background-image:url(images/pictures/4.jpg)}
                        .bg-5{background-image:url(images/pictures/5.jpg)}
                        .bg-6{background-image:url(images/pictures/6.jpg)}
                        .bg-7{background-image:url(images/pictures/7.jpg)}
                        .bg-8{background-image:url(images/pictures/8.jpg)}
                        .bg-9{background-image:url(images/pictures/9.jpg)}
                        .bg-body{background-image:url(images/pictures_vertical/bg2.jpg)}
                        .bg-body-1{background-image:url(images/pictures_vertical/bg1.jpg)}
                        .bg-body-2{background-image:url(images/pictures_vertical/bg0.jpg)}
                        // .overlay{background-color:rgba(0,0,0,0.8); position:absolute; top:0px; right:0px; bottom:0px; left:0px;}

                        /*Font Settings*/
                        h1{ font-size:24px; line-height:34px; font-weight:600;}
                        h2{ font-size:21px; line-height:32px; font-weight:600;}
                        h3{ font-size:18px; line-height:30px; font-weight:600;}
                        h4{ font-size:17px; line-height:28px; font-weight:600;}
                        h5{ font-size:16px; line-height:26px; font-weight:600;}
                        h6{ font-size:15px; line-height:22px; font-weight:800;}
                        .ultrathin{font-weight:200;}
                        .thin{font-weight:300;}
                        .thiner{font-weight:400;}
                        .boder{font-weight:600;}
                        .bold{font-weight:700;}
                        .ultrabold{font-weight:900;}
                        .capitalize{text-transform: capitalize;}
                        .italic{font-style: italic;}
                        .small-text{font-size:12px; display:block;}
                        .center-text{text-align:center; display:block;}
                        .right-text{text-align:right;}
                        .uppercase{text-transform: uppercase;}
                        .boxed-text{width:90%; margin:0px auto 30px auto;}
                        .round-image{border-radius:500px;}
                        p a{display:inline;}

                        /*Content Settings*/
                        .content{padding:0px 20px 0px 20px; margin-bottom:30px; display:block;}
                        .container{margin-bottom:30px}
                        .negative-top{margin-top:-25px;}
                        .full-bottom{margin-bottom:25px}
                        .no-bottom{margin-bottom:0px}
                        .full-top{margin-top:25px}
                        .half-bottom{margin-bottom:15px}
                        .half-top{margin-top:15px}
                        .quarter-bottom{margin-bottom:10px}
                        .hidden{display:none}
                        .left-column{width:45%; margin-right:5%; float:left}
                        .right-column{width:45%; margin-left:5%; float:left}
                        .one-third-left{float:left; width:29%;  margin-right:1%}
                        .one-third-center{float:left; width:29%; margin-left:5%; margin-right:5%}
                        .one-third-right{float:left; width:29%; margin-left:1%}
                        .clear{clear:both}
                        .large-icon{font-size:24px;}
                        .huge-icon{font-size:32px;}

                        * {
                            margin: 0;
                            padding: 0;
                            border: 0;
                            font-size: 100%;
                            vertical-align: baseline;
                            outline: none;
                            font-size-adjust: none;
                            -webkit-text-size-adjust: none;
                            -moz-text-size-adjust: none;
                            -ms-text-size-adjust: none;
                            -webkit-tap-highlight-color: rgba(0,0,0,0);
                            -webkit-font-smoothing: antialiased;
                            -webkit-transform: translate3d(1,1,1);
                            transform:translate3d(1,1,1);
                            text-rendering: auto;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                        }

                        div, a, p, img, blockquote, form, fieldset, textarea, input, label, iframe, code, pre {
                            display: block;
                            position:relative;
                        }

                        p{
                            line-height:26px;
                            font-weight:400;
                            color:#666666;
                            font-size:13px;
                            margin-bottom:30px;
                        }

                        a{text-decoration:none; color:#3498db;}

                        /*Lists*/
                        .icon-list{list-style:none; font-size:14px; line-height:28px; color:#666666;}
                        .icon-list i{width:30px;}

                        .center-icon{
                            width:80px;
                            height:80px;
                            border-radius:80px;
                            border:solid 1px rgba(0,0,0,0.5);
                            text-align:center;
                            line-height:80px;
                            font-size:24px;
                            margin:0px auto 30px auto;
                            display:block;
                        }

                        .decoration, .decoration-no-bottom{
                            height:1px;
                            background-color:rgba(0,0,0,0.1);
                        }

                        .deco{height:1px; margin-bottom:30px;}

                        .deco-box .deco{
                            width:10%;
                            float:left;
                            height:5px;
                        }

                        .decoration{margin-bottom:30px;}
                        .decoration-margins{margin:0px 20px 30px 20px}

                        /*Sidebar Design*/

                        #sidebar{
                            width:270px;
                            background-color:#FFFFFF;
                        }

                        .sidebar-header{
                            width:270px; padding:30px;
                        }

                        .sidebar-logo{
                            width:270px;
                        }

                        .sidebar-logo em{
                            display:block;
                            padding-left:30px;
                            padding-top:60px;
                            position:relative;
                            color:rgba(255,255,255,0.7);
                            font-style: normal;
                            font-size:11px;
                        }

                        #sidebar *{
                            user-select: none;
                        }

                        #sidebar .menu{
                            list-style:none;
                            padding:0px;
                            margin:0px;
                        }

                        #sidebar .menu li{
                            height:55px;
                            line-height:57px;
                            padding-left:10px;
                            transition:all 250ms ease;
                        }

                        #sidebar .menu li a{
                            color:#2e2e2e;
                            font-size:14px;
                            font-weight:500;
                            padding-left:60px;
                        }

                        #sidebar .menu li i {
                            color:#5d5d5d;
                            font-size:15px;
                            padding-right:20px;
                            position:absolute;
                            left:15px;
                            height:57px;
                            width:20px;
                            text-align: center;
                            line-height:57px;
                        }

                        #sidebar .menu li:hover{background-color:#eeeeee; transition:all 250ms ease;}


                        #sidebar .submenu h4{
                            background-color:#FFFFFF;
                            border:none;
                            color:#2e2e2e;
                            font-size:14px;
                            font-weight:500;
                            padding-left:68px;
                            height:55px;
                            line-height:55px;
                        }


                        #sidebar .submenu h4 i{
                            color:#5d5d5d;
                            position:absolute;
                            height:55px;
                            width:68px;
                            line-height:55px;
                            left:0px;
                            text-align:center;
                            font-size:15px;
                        }

                        .submenu a{
                            height:50px;
                            line-height:50px;
                            font-size:13px;
                            padding-left:70px;
                            color:#666666;
                        }

                        .submenu a:last-child{margin-bottom:5px;}

                        .submenu a i{
                            position:Absolute;
                            height:50px;
                            width:68px;
                            text-align:center;
                            line-height:52px;
                            font-size:12px;
                            left:0px;
                        }

                        .sidebar-copyright{
                            font-size:11px;
                            color:#888888;
                            margin-top:-5px;
                            padding-left:20px;
                            padding-bottom:20px;
                            display:block;
                            line-height:24px;
                            font-style: normal;
                        }

                        #sidebar .submenu h4.selected{background-color:#eeeeee;}
                        .selected{background-color:#eeeeee;}
                        .sidebar-deco{background-color:rgba(0,0,0,0.1); height:1px; margin:10px 0px 20px 0px; display:block;}

                        /*Page Content*/

                        ::-webkit-scrollbar { width: 0; }

                        /*input[id="toggle-menu"]*/
                        input[data-submenu-items]{
                            position: absolute;
                            top: -9999px;
                            left: -9999px;
                            /* For mobile, it's typically better to position checkbox on top of clickable
                               area and turn opacity to 0 instead. */
                        }

                        .page-content{
                            z-index:999;
                            margin-top:85px;
                            margin-bottom:20px;
                            margin-left:10px;
                            margin-right:10px;
                        }

                        .page-content-before{margin-top:-55px;}
                        .page-content-full{margin-bottom:20px;}

                        .material-effect{
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                        }

                        .material-box{
                            background-color:#FFFFFF;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            margin-bottom:30px;
                            padding:20px;
                        }

                        .material-news{
                            padding:20px 0px 0px 0px;
                        }

                        .material-box-full{
                            background-color:#FFFFFF;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            margin-bottom:30px;
                            padding:30px 0px 15px 0px;
                        }

                        .half-material-box-left{
                            width:47%;
                            float:left;
                            background-color:#FFFFFF;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            margin-bottom:30px;
                            padding:30px 15px 15px 15px;
                            box-sizing:border-box;
                        }

                        .half-material-box-right{
                            width:47%;
                            margin-left:6%;
                            float:left;
                            background-color:#FFFFFF;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            margin-bottom:30px;
                            padding:30px 20px 15px 20px;
                            box-sizing:border-box;
                        }

                        .under-material{
                            background-color:#FFFFFF;
                            margin-bottom:30px;
                            padding:0px 20px;
                            margin-top:-50px;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            border-top:solid 1px rgba(0,0,0,0.07);
                        }

                        .under-material-link{
                            float:right;
                            font-weight:700;
                            text-transform:uppercase;
                            height:50px;
                            line-height:50px;
                            padding-left:15px;
                        }

                        .under-material-icon{
                            width:43px;
                            height:50px;
                            line-height:50px;
                            float:right;
                            font-size:13px;
                        }

                        .under-material-icon[type="facebook"],
                        .under-material-icon[type="twitter"],
                        .under-material-icon[type="gplus"]{background-image:none; background-color:transparent;}

                        .under-material-icon[type="facebook"]:before {content: "\f09a";	color:#3b5998;}
                        .under-material-icon[type="twitter"]:before {content: "\f099"; color:#4099FF;}
                        .under-material-icon[type="gplus"]:before { content: "\f0d5"; color:#D34836;}

                        .under-material-icon[type="facebook"]:before,
                        .under-material-icon[type="twitter"]:before,
                        .under-material-icon[type="gplus"]:before{
                            text-align:center;
                            line-height:43px;
                            width:43px;
                            display:inline-block;
                            font-family: 'FontAwesome';
                        }



                        .body-bg{
                            background-image:url(images/pictures_vertical/bg3.jpg);
                            background-size:cover;
                            position:fixed;
                            top:0px;
                            left:0px;
                            right:0px;
                            bottom:0px;
                            z-index:5;
                        }

                        /*Header*/
                        header{
                            position:fixed;
                            height:60px;
                            z-index:9999;
                            transition:all 250ms ease;
                            left:0px;
                            right:0px;
                            top:0px;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            background-color:#FFFFFF;
                        }

                        .header-clear{height:60px; display:block;}

                        .header-icon-1, .header-icon-2{
                            position:absolute;
                            line-height:60px;
                            text-align:center;
                            width:60px;
                            display:block;
                            font-size:14px;
                            background-color:transparent;
                            color:#000000;
                        }

                        .header-icon-2{right:0px; top:0px;}
                        .header-icon-1{left:0px; top:0px; cursor:pointer;}

                        .header-logo{
                            margin:15px auto 0;
                            width:200px;
                            height:60px;
                            display:block;text-align:center;
                        }

                        /*Footer*/
                        .footer{padding-top:20px;}
                        .footer-logo{
                            background-image:url(images/logo.png);
                            background-repeat: no-repeat;
                            background-size:120px 20px;
                            width:120px;
                            height:20px;
                            display:block;
                            margin:12px auto 15px auto;
                        }

                        .footer p:last-child{margin-bottom:0px; margin-top:-15px;}

                        .footer-socials a{
                            width:40px;
                            height:40px;
                            line-height:40px;
                            margin-left:2px;
                            margin-right:2px;
                            text-align:center; display:inline-block;
                        }

                        .footer-socials{
                            width:100%;text-align:center;
                            margin:0px auto 30px auto;
                        }

                        /*Call To Action Bar*/

                        .call-to-action-box a{
                            width:50%;
                            float:left;
                            height:40px;
                            line-height:40px;
                            text-align:center;
                            font-weight:700;
                            text-transform:uppercase;
                            margin-bottom:30px;
                        }

                        .news-slider .caption{
                            background-color:rgba(0,0,0,0.8);
                        }

                        .caption{
                            position:absolute;
                            bottom:0px;
                            left:0px;
                            right:0px;
                            padding:20px;
                            background-color:rgba(0,0,0,0.5);
                        }

                        .caption h4{
                            font-size:14px;
                            color:#FFFFFF;
                            line-height:20px;
                            margin-top:12px;
                        }

                        .caption h3{
                            color:#FFFFFF;
                            font-size:16px;line-height:normal;text-align:center;
                        }

                        .caption p{
                            font-size:12px;
                            color:rgba(255,255,255,0.5);
                        }

                        /*Staff Slider*/


                        .staff-slider{
                            margin:0 auto;
                            display:block;
                        }

                        .staff-slider .inner-slide{
                            width:240px;
                            display:block;
                            margin:0 auto;
                        }

                        .staff-slider .slide{
                            margin-left:10px;
                            margin-right:10px;
                        }

                        .staff-slider amp-img img{
                            transform:scale(0.9, 0.9);
                        }

                        .staff-slider h2{
                            padding-top:20px;
                            display:block;
                            margin-bottom:-10px;
                        }

                        .staff-slider .amp-carousel-button{
                            margin-top:50px;
                        }

                        /*Quote Slider*/

                        .quote-slider p{
                            font-size:22px;
                            font-weight:200;
                            max-width:260px;
                            margin:0 auto;
                            text-align:center;
                            line-height:42px;
                            font-style:italic
                        }

                        .quote-slider em i{
                            font-size:18px;
                        }

                        .quote-slider em{
                            display:block;
                            width:100px;
                            margin:30px auto 30px auto;
                            color:#f1c40f;
                        }

                        .quote-slider a{
                            font-size:15px;
                            font-weight:700;
                            display:block;
                            text-align:center;
                        }

                        .quote-slider .amp-carousel-button{
                            top:100%;
                            margin-top:-30px;
                        }

                        .social-icons{
                            width:150px;
                            margin:0 auto;
                        }

                        .social-round a{border-radius:50px;}

                        .social-icons-small{
                            width:95px;
                            margin:0 auto;
                        }

                        .social-icons a{
                            line-height:35px;
                            width:35px;
                            height:35px;
                            margin-left:10px;
                            margin-right:5px;
                            float:left;
                            font-size:12px;
                            text-align:center;
                        }

                        .social-icons-small a{
                            line-height:35px;
                            width:35px;
                            height:35px;
                            margin-left:5px;
                            margin-right:5px;
                            float:left;
                            text-align:center;
                            display:inline-block;
                        }


                        /*Large Link*/

                        .large-link{
                            font-size:12px;
                            height:50px;
                            line-height:50px;
                            color:#000000;
                            border-bottom:solid 1px rgba(0,0,0,0.1);
                        }


                        .large-link .fa-angle-right{
                            position:absolute;
                            right:0px;
                            height:50px;
                            line-height:50px;
                            text-align:center;
                        }

                        .large-link i:last-child{margin-right:10px; width:20px; text-align:center;}

                        /*Heading Block*/

                        .heading-box{padding:35px 20px 10px 20px; margin-bottom:30px;}
                        .heading-box h3{margin-bottom:-5px; position:relative; z-index:10;}
                        .heading-box p{position:relative; z-index:10;}
                        .page-title{margin-bottom:-60px;}


                        .heading-block{
                            padding:30px 20px;
                            margin-bottom:30px;
                        }

                        .heading-block h4{
                            font-size:20px;
                            position:relative;
                            z-index:10;
                            color:#FFFFFF;
                        }

                        .heading-block p{
                            position:relative;
                            z-index:10;
                            color:rgba(255,255,255,0.5);
                            margin-bottom:0px;
                        }

                        .heading-block a{
                            z-index:10;
                            width:100px;
                            height:10px;
                            line-height:10px;
                            color:#FFFFFF;
                            text-align:center;
                            font-size:12px;
                            margin:20px auto 0px auto;
                            border:solid 1px rgba(255,255,255,0.5);
                            border-radius:5px;
                            display:block;
                            text-transform: uppercase;
                            font-weight:800;
                        }

                        .icon-heading h4{
                            padding-left:90px;
                            font-size:15px;
                        }

                        .icon-heading p{
                            line-height:24px;
                            padding-left:90px;
                        }

                        .icon-heading i{
                            border-radius:10px;
                            position:absolute;
                            width:70px;
                            height:70px;
                            line-height:70px;
                            margin-top:5px;
                            text-align:center;
                            font-size:24px;
                        }

                        .quote-style h4, .quote-style h5{
                            font-weight:300;
                            margin-left:25px;
                            margin-right:25px;
                            text-align:center;
                            line-height:40px;
                        }

                        .rating{
                            width:80px;
                            margin:20px auto 20px auto;
                            display:block;
                        }


                        /*Half Columns*/

                        .half-column-left{
                            width:45%;
                            float:left;
                        }

                        .half-column-right{
                            width:45%;
                            float:left;
                        }

                        .center-column-icon{
                            font-size:28px;
                            text-align:center;
                            display:block;
                        }

                        /*Gallery*/

                        .gallery-thumb{
                            width:31%;
                            float:left;
                            margin-bottom:3%;
                        }
                        .gallery-thumb p{margin-bottom:10px; line-height:20px; padding-top:5px; text-align:center; font-size:13px;}
                        .gallery-round .gallery-thumb{border-radius:100px}
                        .gallery-wide .gallery-thumb-wide{margin-bottom:5px;}
                        .gallery-wide h4{
                            position:absolute;
                            background-color:rgba(0,0,0,0.8);

                            color:#FFFFFF;
                            z-index:99;
                            height:50px;
                            line-height:50px;
                            margin-top:-55px;
                            width:100%;
                            padding-left:20px;
                            font-weight:300;
                            font-size:14px;
                            pointer-events:none;
                        }


                        .gallery-thumb:nth-child(3n-1){
                            margin-left:3%;
                            margin-right:3%;
                        }

                        /*Splash Page*/
                        .splash-content .splash-logo{
                            background-image:url(images/amp-logo.png);
                            background-size:80px 80px;
                            width:80px;
                            height:80px;
                            margin:-30px auto 20px auto;
                        }

                        .splash-content{
                            position:fixed;
                            width:240px;
                            height:350px;
                            left:50%;
                            top:50%;
                            margin-top:-140px;
                            margin-left:-120px;
                        }

                        .splash-button{
                            width:130px;
                            margin:0 auto;
                            text-align:center;
                            height:40px;
                            line-height:40px;
                            font-size:12px;
                        }

                        /*Landing Content*/

                        .landing-logo{
                            background-image:url(images/logo_light.png);
                            background-size:130px 35px;
                            margin:0 auto;
                            height:35px;
                            width:130px;
                            margin-top:20px;
                        }

                        .landing-content{
                            width:300px;
                            margin:40px auto 30px auto;
                        }

                        .landing-content a{
                            width:70px;
                            height:70px;
                            float:left;
                            margin:0px 15px 60px 15px;
                            border-radius:70px;
                            line-height:70px;
                            font-size:21px;
                            text-align:center;
                        }

                        .landing-content a em{
                            position:absolute;
                            font-size:14px;
                            width:70px;
                            text-align:center;
                            bottom:-60px;
                            left:0px;
                            right:0px;
                            font-style:normal;
                        }

                        /*Accordion Styles*/
                        .accordion h4{
                            background-color:transparent;
                            border:none;
                        }

                        .accordion h4{
                            font-size:16px;
                            line-height:40px;
                        }

                        .accordion h4 i{
                            height:40px;
                            line-height:40px;
                            position:absolute;
                            right:0px;
                            font-size:12px;
                        }

                        .nested-accordion h4{
                            font-size:14px;
                        }

                        section[expanded] .fa-plus{	transform:rotate(45deg);}
                        section[expanded] .fa-angle-down{	transform:rotate(180deg);}
                        section[expanded] .fa-chevron-down{	transform:rotate(180deg);}

                        /*Fonts*/
                        .demo-icons a{
                            color:#FFFFFF;
                            width:20%;
                            height:50px;
                            float:left;
                        }
                        .demo-icons a i{
                            color:#1f1f1f;
                            font-size:21px;
                            width:50px;
                            height:50px;
                            float:left;
                            text-align:center;
                            overflow:hidden;
                        }

                        /*User Notifications*/
                        .user-notification{
                            text-align:left;
                            padding-top:5px;
                            padding-left:10px;
                            padding-right:10px;
                            background-color:#27ae60;
                            height:50px;
                            color:#FFFFFF;
                            font-size:12px;
                            line-height:24px;
                            width:70%;
                            float:left;
                        }

                        .user-notification button{
                            background-color:#27ae60;
                            color:#FFFFFF;
                            height:55px;
                            position:fixed;
                            right:0px;
                            bottom:0px;
                            width:25%;
                        }

                        /*Inputs*/

                        .text-input{
                            height:45px;
                            line-height:45px;
                            text-indent: 10px;
                            border:solid 1px rgba(0,0,0,0.1);
                            display:block;
                            width:100%;
                            font-size:12px;
                        }

                        .input-icon-field{
                            height:45px;
                            line-height:45px;
                            text-indent: 50px;
                            border:solid 1px rgba(0,0,0,0.1);
                            display:block;
                            width:100%;
                            font-size:12px;
                        }

                        .input-icon i{
                            position:absolute;
                            z-index:9;
                            height:45px;
                            line-height:45px;
                            text-align:center;
                            width:45px;
                            color:#666666;
                        }

                        .select-style {
                            border: 1px solid rgba(0,0,0,0.1);
                            width: 100%;
                            height:45px;
                            display:block;
                            border-radius: 3px;
                            overflow: hidden;
                            background: #FFFFFF url("data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==") no-repeat 95% 50%;
                        }

                        .select-style select {
                            font-size:12px;
                            line-height:35px;
                            padding: 5px 15px;
                            width: 100%;
                            border: none;
                            box-shadow: none;
                            background-color:rgba(255,255,255,0);
                            background-image: none;
                            -webkit-appearance: none;
                        }

                        .select-style select:focus {
                            outline: none;
                        }



                        /*Dropcaps*/

                        .dropcaps-1:first-letter{
                            float:left;
                            font-size:57px;
                            padding:14px 15px 0px 0px;
                            font-weight:800;
                            color:#1f1f1f;
                        }

                        .dropcaps-2:first-letter{
                            font-family: 'Times New Roman', sans-serif;
                            float:left;
                            font-size:42px;
                            padding:15px 15px 0px 0px;
                            font-weight:800;
                            color:#1f1f1f;
                        }

                        .dropcaps-3:first-letter{
                            background-color:#1f1f1f;
                            padding:10px 15px 10px 15px;
                            margin:5px 12px 0px 0px;
                            float:left;
                            font-size:24px;
                            font-weight:800;
                            color:#FFFFFF;
                        }

                        .dropcaps-4:first-letter{
                            font-family: 'Times New Roman', sans-serif;
                            font-weight:800;
                            background-color:#1f1f1f;
                            padding:8px 17px 8px 17px;
                            margin:5px 12px 0px 0px;
                            float:left;
                            font-size:20px;
                            font-weight:400;
                            color:#FFFFFF;
                        }

                        /*Highlights*/
                        .highlight{margin-bottom:10px;}
                        .highlight span{padding:3px 5px 3px 5px; margin-right:2px;}
                        ol ul{	padding-left:5px;}
                        ol, ul{line-height:24px; margin-left:20px;}
                        .icon-list{list-style:none; margin-left:0px; padding-left:0px;}
                        .icon-list i{font-size:10px;}
                        .icon-list ul{list-style:none; padding-left:10px;}
                        .icon-list ul ul{padding-left:10px;}

                        /*Blockquotes*/
                        .blockquote-1{border-left:solid 3px #1f1f1f; padding:10px 0px 10px 20px;}
                        .blockquote-1 a{text-align:right; margin-top:-20px;  font-size:12px;}
                        .blockquote-2 .blockquote-image{position:absolute; border-radius:50px;}
                        .blockquote-2 h5{padding-left:60px;}
                        .blockquote-2 .first-icon{padding-left:60px;}
                        .blockquote-2 a{text-align:right; margin-top:-20px; font-size:12px;}
                        .blockquote-3 .blockquote-image{width:150px; border-radius:150px; margin:0 auto; display:block;}
                        .blockquote-3 h5{margin:10px 0px 10px 0px;}
                        .blockquote-3 .ratings{width:100px; margin:10px auto 10px auto;}
                        .blockquote-3 .ratings i{font-size:18px;}
                        .blockquote-4 i{font-size:24px; position:absolute; margin-top:10px;}
                        .blockquote-4 p{padding-left:50px;}

                        /*Buttons*/
                        .button{
                            display:inline-block;
                            padding:13px 20px;
                            margin:0px 0px 10px 0px;
                            font-size:12px;
                            transition:all 250ms ease;
                        }

                        .button-3d{
                            display:inline-block;
                            padding:12px 20px;
                            margin:0px 0px 10px 0px;
                            font-size:12px;
                            transition:all 250ms ease;
                            border-right:none;
                            border-left:none;
                            border-top:none;
                            border-width:4px;
                        }

                        .button-round{border-radius:30px;}
                        .button-full{margin-left:auto;margin-right:auto;display: block;text-align: center;}
                        .button-center{width:150px; margin-left:auto; margin-right:auto; display:block; text-align:center;}
                        .button:hover{opacity:0.9; transition:all 250ms ease;}

                        .icon-square, .icon-round{
                            width:40px;
                            height:40px;
                            line-height:40px;
                            text-align:center;
                            display:inline-block;
                            margin-left:6px;
                            margin-right:6px;
                            margin-bottom:10px;
                            font-size:14px;
                        }
                        .icon-square:hover, .icon-round:hover{opacity:0.9;}
                        .icon-round{border-radius:45px;}

                        /*Page 404*/
                        .page-404 h1{font-size:60px; line-height:70px; margin-top:70px;}
                        .page-404 a{margin-bottom:100px;}
                        .page-soon h1{font-size:60px; line-height:70px; margin-top:70px;}
                        .page-soon h6{font-size:24px;}
                        .page-soon .social-icons{margin-bottom:100px;}

                        /*Profile Page*/

                        .profile-gradient{
                            background: -moz-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,0.95) 75%,rgba(255,255,255,1) 100%);
                            background: -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,0.95) 75%,rgba(255,255,255,1) 100%);
                            background: linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0.95) 75%,rgba(255,255,255,1) 100%);
                            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=0);
                            height: 250px;
                            margin-top: -235px;
                        }

                        .profile-overlay .profile-header{margin-top:-80px}
                        .profile-header h1{font-size:30px;}
                        .profile-header h6{letter-spacing:2px; opacity:0.5;}
                        .profile-header h5{font-size:12px;}
                        .profile-header i{margin-right:10px;}
                        .profile-header p{font-size:18px;}
                        .profile-followers a{float:left; width:33%; color:#1f1f1f; font-size:18px;}
                        .profile-followers em{display:block; font-style:normal; font-size:12px;}
                        .profile-thumb{margin-top:-50px; width:100px; margin-left:auto; margin-right:auto; display:block; border-radius:100px; border-radius:100px; border:solid 3px #FFFFFF;}

                        /*Timeline 1*/

                        .timeline-1{overflow:hidden; padding:0px }

                        .timeline-1 .timeline-deco{
                            position:absolute;
                            top:0px;
                            left:50%;
                            width:1px;
                            bottom:0px;
                            background-color:rgba(0,0,0,0.15);
                        }

                        .timeline-1 .timeline-icon{
                            width:60px;
                            height:60px;
                            border-radius:60px;
                            line-height:60px;
                            text-align:center;
                            font-size:18px;
                            background-color:#FFFFFF;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                            margin:0px auto 30px auto;
                        }

                        .timeline-1 .container{background-color:#FFFFFF; padding:30px 20px 20px 20px; box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);}
                        .timeline-2{overflow:hidden; padding:50px 20px 0px 20px; margin-top:-25px; margin-bottom:50px;}

                        .timeline-2 .timeline-deco{
                            top:0px;
                            position:absolute;
                            left:50px;
                            width:1px;
                            bottom:0px;
                            background-color:rgba(0,0,0,0.15);
                        }

                        .timeline-2 .timeline-icon{
                            width:40px;
                            height:40px;
                            border-radius:40px;
                            line-height:40px;
                            text-align:center;
                            font-size:18px;
                            background-color:#FFFFFF;
                            border:solid 1px rgba(0,0,0,0.2);
                            margin-left:10px;
                        }

                        .timeline-2 .container{
                            background-color:#FFFFFF;
                            margin-left:70px;
                            margin-top:-60px;
                            padding:10px;
                            box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);
                        }


                        /*News Slider*/

                        .news-slider .amp-carousel-button{display:none;}
                        .news-slider{margin-bottom:10px;}

                        /*News Thumbs*/

                        .news-thumbs .news-item{
                            min-height:125px;
                            color:#1f1f1f;
                        }

                        .news-thumbs .news-item .responsive-img{
                            width:95px;
                            position:absolute;
                            margin-top:5px;
                        }

                        .news-thumbs .news-item h5{
                            margin-left:110px;
                            font-size:15px;
                        }

                        .news-thumbs .news-item p{
                            margin-left:110px;
                            line-height:27px;
                            margin-bottom:0px;
                            font-size:13px;
                        }

                        /*News Strip*/

                        .news-strip{
                            background-color:#000000;
                            padding:20px 0px 20px 0px;
                            margin-bottom:30px;
                        }

                        .news-strip h5{
                            font-weight:800;
                            color:#FFFFFF;
                            padding:0px 20px 20px 20px;
                        }

                        /*News Cateogry*/

                        .news-category p{
                            display:inline-block;
                            padding:5px 25px 0px 25px;
                            font-size:13px;
                            margin:0px;
                        }

                        .news-category div{
                            height:5px;
                            width:100%;
                        }

                        /*News Block*/

                        .news-blocks .news-item{
                            min-height:125px;
                            color:#1f1f1f;
                        }

                        .news-blocks .news-item h5{
                            font-size:18px;
                            padding:15px 0px 5px 0px;
                        }

                        /*News full*/

                        .news-full .news-item{margin-top:1px;}

                        .news-full .news-item h6{
                            position:absolute;
                            background-color:rgba(0,0,0,0.8);
                            bottom:0px;
                            width:100%;
                            color:#FFFFFF;
                            padding:10px 10px 10px 10px;
                        }

                        .news-full .titles{
                            position:absolute;
                            background-color:#FFFFFF;
                            width:250px;
                            height:65px;
                            margin-top:-65px;
                        }

                        .news-full h5{
                            font-size:13px;
                            padding:10px 20px 0px 20px;
                            color:#000000;
                        }
                        .news-full em a{display:inline;}
                        .news-full em{font-size:10px; padding-left:20px; display:block;}
                        .news-full p{padding:10px 20px 0px 20px;}
                        .news-full .read-more{
                            padding-right:20px;
                            text-align:right;
                            font-size:12px;
                            padding-bottom:30px;
                        }

                        /*News Posts*/

                        .news-post-info{
                            font-style:normal;
                            font-size:12px;
                            padding:5px 0px 15px 0px;
                            display:block;
                        }

                        .news-post-info a{
                            display:inline;

                        }

                        /*Contact Page*/

                        .contactField{
                            font-family:'Roboto', sans-serif;
                            height:40px;
                            line-height:40px;
                            line-height:100%;
                            width:100%;
                            display:block;
                            border:solid 1px rgba(0,0,0,0.1);
                            text-indent:10px;
                            font-size:13px;
                            transition:all 250ms ease;
                            margin-bottom:20px;
                        }

                        .contactField:focus{
                            border:solid 1px rgb(39, 174, 96);
                            transition:all 250ms ease;
                        }

                        .contactTextarea{
                            font-family:'Roboto', sans-serif;
                            padding-top:10px;
                            min-height:80px;
                            line-height:40px;
                            line-height:100%;
                            width:100%;
                            display:block;
                            border:solid 1px rgba(0,0,0,0.1);
                            text-indent:10px;
                            font-size:13px;
                            transition:all 250ms ease;
                            margin-bottom:30px;
                        }

                        .contactTextarea:focus{
                            transition:all 250ms ease;
                            border:solid 1px rgb(39, 174, 96);
                        }

                        .field-title{
                            font-size:13px;
                            margin-bottom:5px;
                        }

                        .field-title span{
                            font-size:10px;
                            color:#cacaca;
                            position:absolute;
                            right:0px;
                            margin-top:2px;
                        }

                        .buttonWrap{
                            width:100%;
                            display:block;
                            text-align:center;
                            margin-bottom:0px;
                            appearance:none;
                            -webkit-appearance:none;
                        }

                        .contact-icon{
                            color:#666666;
                            line-height:30px;
                        }

                        .contact-icon i{
                            color:#1f1f1f;
                            width:30px;
                        }


                        /*Cover Pages*/

                        .cover-clear{height:40px;}

                        .cover-1{
                            padding:90px 40px 0px 40px;
                        }

                        .cover-1 h1{
                            font-size:30px;
                            color:#FFFFFF;
                        }

                        .cover-1 h6{
                            font-size:16px;
                            color:#FFFFFF;
                            padding:10px 0px 30px 0px;
                            font-weight:300;
                        }

                        .cover-1 p{
                            font-size:15px;
                            font-weight:300;
                            color:#a7a7a7;
                            line-height:35px;
                            margin-bottom:50px;
                        }

                        .cover-1 .button{
                            border:solid 1px rgba(255,255,255,0.2);
                            color:#FFFFFF;
                            margin-right:10px;
                        }

                        .cover-2{padding-top:0px;}

                        .cover-2 h1{
                            color:#FFFFFF;
                            font-size:30px;
                            font-weight:300;
                            text-align:center;
                            padding-top:30px;
                        }

                        .cover-2 h6{
                            color:#c1c1c1;
                            font-style: italic;
                            font-size:13px;
                            font-weight:300;
                            text-align:center;
                            padding:0px 0px 20px 0px;
                        }

                        .cover-2 p{
                            font-size:15px;
                            text-align:center;
                            line-height:36px;
                            color:#c1c1c1;
                            padding:30px 35px 40px 35px;
                            font-weight:300;
                        }

                        .cover-3{
                            padding:20px 20px 20px 20px;
                            background-color:#FFFFFF;
                            margin:40px;
                            border-radius:7px;
                        }

                        .cover-3 amp-img{
                            margin:0 auto;
                            display:block;
                        }

                        .cover-3 h1{
                            font-size:24px;
                            text-align:center;
                            padding:20px 0px 0px 0px;
                        }

                        .cover-3 em{
                            font-size:12px;
                            display:block;
                            text-align:center;
                            margin-bottom:20px;
                        }

                        .cover-3 p{
                            text-align:center;
                            font-size:16px;
                            font-weight:300;
                            padding:0px 5px 0px 5px;
                        }

                        .cover-3 .socials{
                            transform:scale(0.8, 0.8);
                            width:210px;
                            margin:0 auto;
                        }

                        .cover-3 .socials a{
                            margin-left:4px;
                            margin-right:4px;
                        }

                        .cover-4 h1{
                            color:#FFFFFF;
                            text-align:center;
                            font-weight:300;
                            font-size:36px;
                            margin:10px 0px 10px 0px;
                        }

                        .cover-4 em{
                            color:#FFFFFF;
                            text-align:center;
                            font-style:normal;
                            display: block;
                            font-size:12px;
                            text-transform: uppercase;
                            letter-spacing:1px;
                            font-weight:300;
                        }

                        .cover-4 strong{
                            color:#969696;
                            text-transform:uppercase;
                            font-weight:800;
                            font-size:12px;
                            text-align:center;
                            display:block;
                            margin:20px 0px 30px 0px;
                        }
                        .cover-4 strong i{
                            padding-right:10px
                        }

                        .cover-4 p{
                            padding:40px 30px 40px 30px;
                            color:#FFFFFF;
                            line-height:36px;
                            text-align:center;
                            font-weight:300;
                            font-size:16px;
                        }

                        .cover-4 a{
                            font-size:13px;
                            width:170px;
                            margin:0 auto;
                        }

                        .cover-5 h1{
                            color:#FFFFFF;
                            font-size:40px;
                            font-weight:300;
                            text-align:center;
                            padding-top:70px;
                        }

                        .cover-5 em{
                            display:block;
                            text-align:center;
                            color:#FFFFFF;
                            font-size:12px;
                            margin-top:10px;
                            font-style: normal;
                        }

                        .cover-5 p{
                            padding:20px 30px 20px 30px;
                            color:#a7a7a7;
                            font-weight:300;
                            text-align:center;
                            font-size:16px;
                            line-height:40px;
                        }

                        .cover-socials a{
                            width:35px;
                            height:35px;
                            border-radius:35px;
                            float:left;
                            text-align:center;
                            line-height:35px;
                            font-size:12px;
                            margin:0px 5px 0px 5px;
                        }

                        .cover-socials{
                            width:230px;
                            margin:40px auto 30px auto;
                        }
                        
                        .break-word {
                            word-wrap: break-word;
                            overflow-wrap: break-word;
                            word-break: break-all;
                        }
                    `}</style>
                <header className="header-light">
                    <button on="tap:sidebar.toggle" className="ampstart-btn caps m2 header-icon-1"><i
                        className="fa fa-navicon"></i></button>
                    <a href="/" className="header-logo">
                        <amp-img src="https://i.judge.sh/Rare/5qKPERfA.png" width="114"
                                 height="30"></amp-img>
                    </a>
                    <a href="/contact_us" target="_blank" className="header-icon-2"><i className="fa fa-envelope-o"></i></a>
                </header>

                <div className="page-content break-word">
                    <div className="content material-box">
                        <h1 className="uppercase ultrabold quarter-bottom center-text break-word">{ data.title }</h1>
                        { ApplyBtn }
                        <h3 className="center-text"><i className="fa fa-briefcase"></i> Test ORG</h3>
                        <h3 className="center-text"><i className="fa fa-map-marker"></i> Test Location</h3>
                        <h3 className="center-text"><i className="fa fa-clock-o"></i> Flull Time</h3>
                        <h3 className="center-text"><i className="fa fa-globe"></i> Test</h3>
                        
                        <p><div className="break-word" dangerouslySetInnerHTML={{ __html: data.description }} ></div></p>
                    </div>


                    <div className="material-box">
                        <h3 className="center-text uppercase ultrabold half-bottom">Job Summary</h3>
                        <p className="center-text">
                            <ul style={{display: "block", wordWrap: "break-word"}}>
                                <li>Test</li>
                            </ul>
                        </p>
                    </div>

                    { data.hasOwnProperty('similar_jobs') &&  data.similar_jobs.length > 0 ? (
                        <div className="content material-box">
                            <h3 className="center-text uppercase ultrabold half-bottom">Recommended jobs for you</h3>
							{loadSimilarJobs(data.similar_jobs)}
							
                            <h3 className="center-text">
                                <a id="similar-jobs" rel="noindex, nofollow" className="btn btn-primary btn-lg" target="_blank" href="#">
                                    View More Similar Jobs <i className="fa fa-external-link"></i>
                                </a>
                            </h3>
                        </div>
                    ) : '' }
                    <div className="content material-box">
					<div>
                <h3 className="center-text">Search for jobs from leading job portals</h3>
                <a href="/cms/about-us" className="center-text" target="_blank">More Details <i className="fa fa-external-link"></i></a>
                <form className="sample-form"
                      method="GET"
                      action="/search"
                      target="_top"
                      custom-validation-reporting="show-all-on-submit">
                    <span className="center-text" visible-when-invalid="valueMissing"
                          validation-for="search-bottom"></span>
                    <span className="center-text" visible-when-invalid="patternMismatch"
                          validation-for="search-bottom">Min 3 characters are required to search</span>
                    <input type="search"
                           placeholder="Search for your next job here..."
                           pattern=".{3,}"
                           id="search-bottom"
                           className="input-bar"
                           name="q"
                           required
                           autoComplete="off"
                    />
                    <button type="submit"
                            className="button-3d jb-search-btn button-center uppercase ultrabold">
                        <i className="fa fa-search"></i> Search
                    </button>

                </form>
            </div>
                        
                    </div>

                    <div className="material-box center-text">
                        <h3 className="uppercase ultrabold half-bottom">Jobs by Location</h3>
                         <ul>
							<li><a href="/cms/about-us" target="_blank">About Us</a></li>
							<li><a href="/contact_us" target="_blank">Contact Us</a></li>
							<li><a href="/cms/privacy-policy" target="_blank">Privacy Policy</a></li>
							<li><a href="/cms/terms-of-use" target="_blank">Terms Of Use</a></li>
						</ul>
                    </div>
                </div>
            </div>
	)
}

export async function getStaticPaths() {
    return {
        // pre-fetching data
        paths: [],
        // Enable statically generating additional pages while the API is calling
        fallback: 'blocking',
    }
}


export async function getStaticProps({ params : { id } }) {
	const fetch = require("node-fetch");
	let response = await fetch('https://run.mocky.io/v3/159c7f8f-0071-40c3-8174-6ed16451c8cb')
	.then(response => response.json());

    // Pass data to the page via props
    return { props: { res : response } };
}

function loadSimilarJobs(similar_jobs) {
	return (
		similar_jobs.map((job) =>
			<a href={ "/job/" + job.slug } target="_blank" className="full-bottom" key={job.slug}>
				<h3 className="uppercase ultrabold center-text">{ job.title }</h3>
				<h6 className="center-text"><i className="fa fa-briefcase"></i> {job.company.title}</h6>
				<h6 className="center-text"><i className="fa fa-map-marker"></i> Multiple locations}</h6>
			</a>
		)
	)    
}
