import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';
import FooterTmpl from '../Footer/FooterTmpl';

function CookiePageTmpl() {

  return (
    <div class="inner-container">
      <div class="form-signin">
        <div class="form-label-group header-logo"> <img src="images/logo.jpg" class="logo logo-login" alt="" />
          <h1 class="login-marb text-center">TEXTEND COOKIE POLICY</h1>
        </div>
        <div class="form-body terms">
          <div class="form-row2">
            
            <h1 class="text-center">Cookie Policy</h1>
            <h2>What are Cookies?</h2>
            <p>A cookie is a small text file which is placed onto your computer (or other electronic device) when you access our website. Our Website may use “cookies” on this website to:</p>
            <ul>
              <li>improve our services </li>
              <li>make your online experience more efficient and enjoyable. </li>
              <li>recognise you whenever you visit this website </li>
              <li>obtain information about your preferences and use of our site</li>
              <li>carry out research and statistical analysis to help improve our content and services and to help us better understand our customer requirements and interests  </li>
            </ul>
            <p>Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you. The information we obtain from our use of cookies will not usually contain your personal data. Although we may obtain information about your computer or other electronic device such as your IP address, your browser and/or other internet log information, this will not usually identify you personally. In certain circumstances, such as when you complete the contact page, we may collect personal information about you, but only where you voluntarily provide it. </p>
            <p>In most cases we will need your consent in order to use cookies on this website. The exception is where the cookie is essential in order for us to provide you with a service you have requested.</p>
            <h2>Our cookies will be used for</h2>
            <h3>Essential session management</h3>
            <ul>
              <li>creating a specific log-in session for a user of the site in order that the site remembers that a user is logged in and that their page requests are delivered in an effective, secure and consistent manner;</li>
              <li>recognising when a user of the site has visited before allowing us to identify the number of unique users we receive to the site and make sure we have enough capacity for the number of users that we get;</li>
              <li>recognising if a visitor to the site is registered with us in any way;</li>
              <li>we may also log information from your computer including the existence of cookies, your IP address and information about your browser program in order to allow us to diagnose problems, administer and track your usage of our site.</li>
            </ul>
            <h3>Functionality</h3>
            <ul>
              <li>customising elements of the promotional layout and/or content of the pages of the site.</li>
            </ul>
            <h3>Performance and measurement</h3>
            <ul>
              <li>collecting statistical information about how our users use the site so that we can improve the site and learn which parts are most popular to users.</li>
            </ul>
            <h2>Consent</h2>
            <p>There is a notice on our home page which describes how we use cookies and which also provides a link this policy. If you use this website after this notification has been displayed to you, we will assume that you consent to our use of cookies for the purposes described in this policy.</p>
            <h2>Third Party Cookies</h2>
            <p>We may work with third-party suppliers who may also set cookies on our website, for example Twitter, LinkedIn, and <span class="text-uppercase">Adobe Flashplayer which we use to display video content</span>. These third-party suppliers are responsible for the cookies they set on our site. If you want further information please go to the website for the relevant third party. </p>
            <p>For example, some of the advertisements on our website may be served by Google. Google’s use of the DART cookie enables it to serve ads to Users based on their visit to our Website and other sites on the Internet. DART uses “non personally identifiable information” and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy <a href="http://www.google.com/privacy_ads.html" target="_blank">http://www.google.com/privacy_ads.html</a></p>

            <h2>Advertising</h2>
            <p>Advertisements appearing on our site may be delivered to you by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows advertising networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This cookie policy does not cover the use of cookies by any advertisers.</p>
            <h2>Turning off Cookies</h2>
            <p>You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If your do so, note that some parts of our website may not function properly. For further information about cookies and how to disable them please go to: <a href="http://www.aboutcookies.org/" target="_blank">www.aboutcookies.org</a> or <a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a>.</p>
          </div>
        </div>
        <FooterTmpl />
      </div>
     
    </div>
  )
}


export default CookiePageTmpl;
