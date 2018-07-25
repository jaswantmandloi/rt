import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';
import FooterTmpl from '../Footer/FooterTmpl';


function TermsPageTmpl() {
  
  return (
    <div class="inner-container">
  <div class="form-signin">
    <div class="form-label-group header-logo"> 
    <img src="images/logo.jpg" class="logo logo-login" alt="" />
      <h1 class="login-marb text-center">Terms And Conditions</h1>
    </div>
    <div class="form-body terms">
      <div class="form-row2">
        <h2>Definitions</h2>
        <p> "<b>Content</b>" means the audio, text, images, video or other multimedia content, software or other information or material submitted to or used on the Website or Software;</p>
        <p> "<b>Cookie Policy</b>" means the policy available at the following link: 
        <Link to={routes.cookie.path} >Cookie Policy</Link>, 
        which governs how we use cookies in the Website;</p>
        <p> “<b>End User Licence Agreement or EULA</b>” means the license available at the following link: <Link to={routes.eula.path} >SOFTWARE TERMS OF USE</Link> governing use of the Software;</p>
        <p>“<b>Permitted Purpose</b>” means using the Software for Textend CRM messaging and other purposes as indicated on our website. </p>
        <p> “<b>Software</b>” means the TEXTEND CRM messaging mobile application; </p>
        <p>"<b>Privacy Policy</b>" means the policy available at the following link: <Link to={routes.privacy.path} > privacy policy </Link> , which governs how we process any personal data collected from you;</p>
        <p>"<b>We, us or our</b>" means MAIDA HILL ENTERPRISE LIMITED company number 10574133, whose registered office is 99 Chippenham Road, London, United Kingdom, W9 2AB. A reference to us in these terms also includes our group companies from time to time. </p>
        <p>"<b>You or your</b>" means the person accessing or using the Website, Software or Content.</p>
        <br/>
        <h2>About our Terms and Conditions</h2>
        <p>These terms of use (together with the documents referred to in it) tells you the terms of use on which you may make use of our website <a href="https://www.textend.co.uk/" target="_blank">https://www.textend.co.uk</a>. Use of our site includes accessing and browsing the Website and Content and/or registering to use the Software.</p>
        <p>By accessing or using this Website or otherwise indicating your consent by registering an account to use the Software, you agree to be bound by these terms and conditions and the documents referred to in them. If you do not agree with or accept any of these terms, you should stop using the Website immediately. </p>
        <p>Your use of the Website is subject to our Privacy Policy and our Cookie Policy. Your use of the Software is also subject to the EULA. To the extent these terms and conditions are inconsistent with the EULA, the latter shall prevail. </p>
        <p>The Website is for your use only and is made available free of charge apart from certain features of the Software, which you will need to pay to use. This will be made clear to you before you accept the EULA. </p><br/>

        <h2>Who we are</h2>
        <ul class="no-bullet">
          <li>1.1 <a href="https://www.textend.co.uk/" target="_blank">https://www.textend.co.uk</a> is operated by us</li>
          <li>1.2	Some important details about us:</li>
          <li>1.3	Our registered office is at: 99 Chippenham Road, London, United Kingdom, W9 2AB</li>
          <li>1.4	Our trading office is at: 99 Chippenham Road, London, United Kingdom, W9 2AB </li>
          <li>1.5	Our regulator is: OfCom<br/>
            <div class="no-bullet2"> <b>Ofcom </b><br/>
              Riverside House <br/>
              2a Southwark Bridge Road <br/>
              London <br/>
              SE1 9HA <br/>
              Switchboard: 0300 123 3000 or 020 7981 3000 <br/>
              Fax: 020 7981 3333</div>
          </li>
        </ul><br/>


        <h2>Intellectual Property</h2>
        <p>This Website and all intellectual property rights in it including the Software are owned by us. Intellectual property rights means rights such as: copyright, trademarks, domain names, design rights, database rights, patents and all other intellectual property rights of any kind whether or not they are registered or unregistered (anywhere in the world). You agree not to adjust, to try to circumvent, or delete any notices contained on the Website (including any intellectual property notices). You hereby grant us a royalty free, non-exclusive, irrevocable, worldwide license to use any Content you have submitted to the Website or Software for the Permitted Purpose. </p><br/>

        <h2>Restricted Activities</h2>
        <p>When using the Website or Software you agree not to: </p>
        <ol class="ol-list">
          <li>Assist in disruption of the Website, the Software or the servers and networks which are connected to the Software, or breach and rules or regulations of the networks connected to the Software;</li>
          <li>Use the Software for a fraudulent or illegal purpose, or to use the Website to harvest personal data without prior consent;</li>
          <li>Amend any Content in order to disguise its origin and prevent detection by the Content owner or prevent unsubscription from receiving marketing notifications;</li>
          <li>Upload, download, send, transmit or publish any Content that infringes on the intellectual property rights of any owner;</li>
          <li>Upload, download, send, transmit or publish any Content that contains software viruses or malicious code;</li>
          <li>Upload, download, send, transmit or publish any Content that is unlawful, threatening, obscene, defamatory, libelous, harassing, hateful, racially offensive, or encourages conduct that would be considered a criminal offense, gives rise to civil liability, violate any law, or is otherwise inappropriate; or</li>
          <li>Provide false details or misrepresent your affiliation with any party. </li>
        </ol><br/>

        <h2>Content Submitted to the Website</h2>
        <p>While we try to make sure that the Website is secure, we cannot guarantee the security of any information that you supply to us and therefore we cannot guarantee that it will be kept confidential. For that reason, when submitting information to us through the contact pages on the Website you should not let us have any patentable ideas or patent applications, advertising or marketing suggestions, prototypes, or any other information that you regard as confidential, commercially sensitive or valuable. </p><br/>

        <h2>Website Availability </h2>
        <p>We do not guarantee that the Website, the Content or the Software will be free from errors or omissions. Furthermore, we cannot promise that the Website or Software will be fit or suitable for any purpose. Any reliance on this Website or Software is at your own risk.</p>
        <p>Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our Website or Software is accurate, complete or up-to-date. </p>
        <p>We may suspend or terminate operation of the Website or Software at any time as we see fit.</p>
        <p>While we try to make sure that the Website and Software is available for your use, we do not promise that the Website, Content or Software are available at all times nor do we promise the uninterrupted use by you of them. We may update the Website and Software from time to time. </p><br/>

        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law our liability is excluded for loss, injury or damage (whether direct or indirect or consequential or incidental or special) arising out of or in connection with your use of the Website, Content or Software including without limitation any and all losses relating to or resulting from:</p>
        <ul>
          <li>their accuracy, reliability, completeness, suitability, merchantability or fitness for purpose;</li>
          <li>any reliance upon or use of or actions taken or not taken or decisions made on the basis of anything contained therein;</li>
          <li>inability at any time to obtain access to any part of the Website; or</li>
          <li>any computer viruses or spyware or malware of any description or any material which might adversely affect the operation of any computer hardware or software or any communications network which affects you as a result of you accessing the Website,</li>
        </ul>
        <p>The above provisions do not affect our liability for death or personal injury arising from our negligence, fraud or fraudulent misrepresentation or for any other liability which is not permitted to be excluded or limited by applicable laws.</p><br/>

        <h2>Indemnity</h2>
        <p>You hereby agree to indemnify and hold us harmless, including our subsidiaries, agents, employees or contractors, from any claim or demand, including reasonable attorneys' fees and costs, made by any third party due to or arising out of Content you upload, download, transmit or publish through the Software, your use of the Software, your connection to the Website or Software, your violation of these terms and conditions, or your violation of any rights of another, regardless of whether such information was provided by us or a third party.</p><br/>

        <h2>Third Party Links</h2>
        <p>The Website may contain hyperlinks or references to third party websites other than the Website. Any such hyperlinks or references are provided for your convenience only. We have no control over third party websites and accept no legal responsibility for any content, material or information contained in them. The display of any hyperlink and reference to any third party website does not mean that we endorse that third party's website, products or services. Your use of a third party site may be governed by the terms and conditions of that third party site.</p><br/>

        <h2>Termination</h2>
        <p>We may terminate this legal agreement with you at any time, at which point you must cease your use of the Website and Software. The provisions regarding <b>Intellectual Property, Limitation of Liability, Indemnity and Governing Law</b> shall survive such termination. </p><br/>

        <h2>Acknowledgment</h2>
        <p>You acknowledge and agree that: (a) you have read and understood the terms and conditons; (b) the terms and conditions are fair, reasonable, and not unduly restrictive; and (c) you have had the opportunity to confer with legal counsel of your choice prior to agreeing to the terms and conditions. </p><br/>

        <h2>Governing Law</h2>
        <p>These terms of use, its subject matter and its formation (and any non-contractual disputes or claims) are governed by English law and are subject to the exclusive jurisdiction of the courts of England and Wales, unless you are a business in which case they are subject to the non-exclusive jurisdiction of the courts of England and Wales. </p>
        <p>The Software has been proudly developed by SODAKA Digital SEO Agency Limited and its licensees. All rights reserved. </p><br/>

        <h2>Variation</h2>
        <p>These terms are dated 1 March 2018. No changes to these terms are valid or have any effect unless agreed by us in writing. We reserve the right to vary these terms and conditions from time to time. Our new terms will be displayed on the Website and by continuing to use and access the Website following such changes, you agree to be bound by any variation made by us. It is your responsibility to check these terms and conditions from time to time to verify such variation.</p>
      </div>
    </div>
  
    <FooterTmpl />
  
  </div>
  
</div>
  )
}


export default TermsPageTmpl;
