import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';
import FooterTmpl from '../Footer/FooterTmpl';


function PrivacyPageTmpl() {

  return (
    <div class="inner-container">
      <div class="form-signin">
        <div class="form-label-group header-logo"> <img src="images/logo.jpg" class="logo logo-login" alt="" />
          <h1 class="login-marb text-center">Privacy Policy</h1>
        </div>
        <div class="form-body terms">
          <div class="form-row2">
            <h2>1. About our Privacy Policy</h2>
            <p>We take the privacy of our customers very seriously. We ask that you read this Privacy Policy ('the Policy') carefully as it contains important information about how we will use your personal data. If you have any comments on this privacy policy, please email them to hello@textend.co.uk</p>

            <h2>2. Who we are</h2>
            <p>Here are the details that the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, known as General Data Protection Regulation (GDPR) says we have to give you as a 'data controller':</p>
            <ul>
              <li>Our site address is &nbsp;
            <a href="https://www.textend.co.uk/" target="_blank">https://www.textend.co.uk</a></li>
              <li>Our company name is MAIDA HILL ENTERPRISE LIMITED</li>
              <li>Our registered address is 99 Chippenham Road, London, United Kingdom, W9 2AB</li>
              <li>Our Data Protection Officer is Mohammed Dibany and they can be contacted at hello@textend.co.uk</li>
            </ul>

            <h2>3. Personal data we may collect about you</h2>
            <p>We will obtain personal data about you such as your name, telephone number, email address, and query details, whenever you complete an online form such as our online contact and query submission page. We will also obtain information about you such as your bank details or company financial information when you register to use our online services or pay for them. </p>
            <p>We may monitor your use of this website through the use of cookies and similar tracking devices. For example, we may monitor how many times you visit, which pages you go to, traffic data, location data and the originating domain name of your internet service provider. This information helps us to build a profile of our users. Some of this data will be aggregated or statistical, which means that we will not be able to identify you individually. For further information on our use of cookies, please see our Cookie policy.</p>
            <p>Under GDPR we will ensure that your personal data is processed lawfully, fairly, and transparently, without adversely affecting your rights.  We will only process your personal data if at least one of the following basis applies:</p>
            <ol class="ol-list">
              <li>you have given consent to the processing of your personal data for one or more 	specific purposes;</li>
              <li>processing is necessary for the performance of a contract to which you are a party or 	in order to take steps at the request of you prior to entering into a contract;</li>
              <li>processing is necessary for compliance with a legal obligation to which we are 	subject;</li>
              <li>processing is necessary to protect the vital interests of you or of another natural 	person;</li>
              <li>processing is necessary for the performance of a task carried out in the public interest 	or in the exercise of official authority vested in the controller; and/or</li>
              <li>processing is necessary for the purposes of the legitimate interests pursued by us or 	by a third party such as our credit card payment processing, except where such 	interests are overridden by the fundamental rights and freedoms of the data subject 	which require protection of personal data, in particular where the data subject is a 	child.</li>
            </ol>            
            <h2>4. How we use your personal data</h2>
            <p>We may use your personal data (including your contact information) for the following purposes:</p>
            <ul>
              <li>to communicate with you from time-to-time </li>
              <li>to improve our services</li>
              <li>to help us identify you and any accounts you hold with us</li>
              <li>administration and processing payments</li>
              <li>research, statistical analysis and behavioural analysis</li>
              <li>customer profiling </li>
              <li>fraud prevention and detection and security vetting</li>
              <li>marketing</li>
              <li>If you don’t want us to use your personal data for any of the other reasons t out in this section 4, you can let us know at any time by contacting us at hello@textend.co.uk, and we will delete your data from our systems.  However, you acknowledge this will limit our ability to provide the best possible [products and] services to you.</li>
            </ul>
            <p>In some cases, the collection of personal data may be a statutory or contractual requirement, and we will be limited in the [products and] services we can provide you if you don’t provide your personal data in these cases.</p>
            <p>We only keep your personal data for as long as we need to in order to use it as described above in this section 4, and/or for as long as we have your permission to keep it.  In any event, we will conduct an [annual] review to ascertain whether we need to keep your personal data. Your personal data will be deleted if we no longer need it.</p>

            <h2>5. Disclosure of your personal data</h2>
            <p>We may share generic aggregated demographic information and personal information with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third party service providers to help us operate our business and the website or administer activities on our behalf. </p>
            <p>In addition, we may disclose your personal data to law enforcement agencies in connection with any investigation to help prevent unlawful activity. </p>
            <p>Where the personal data of any EU member state subject is transferred to a non-EU member state for processing, we undertake to ensure technical and organisational security measures that provide a level of protection appropriate to the risks represented by the processing of such data and in order to protect such data against accidental or unlawful destruction, accidental loss, alteration, unauthorised disclosure or access or any other unlawful form of processing.</p>
            <p>We may contract with third parties to supply services to you on our behalf. 
              These may include payment processing, search engine facilities, advertising and marketing. 
              In some cases, the third parties may require access to some or all of your data. 
              These are the third parties that have access to your information:

            </p>
            <p>Google Inc.</p>

            <p>Where any of your data is required for such a purpose, we will take all reasonable steps to ensure that your data will be handled safely, securely, and in accordance with your rights, our obligations, and the obligations of the third party under GDPR and the law.</p>

            <h2>6. Marketing</h2>
            <p>You have the right to stop us using your information for marketing purposes for our or third party products, promotions and events that may be of interest to you. You may indicate if you do not wish to receive such communications.</p>
            <p>We may keep anonymised and aggregated statistics of your response to any advertising provided to you such as you clicking on a particular advertisement and use it for the purposes already described. </p>

            <h2>7. Keeping your data secure</h2>
            <p>We will use technical and organisational measures to safeguard your personal data. While we will use all reasonable efforts to safeguard your personal data, you acknowledge that the use of the internet is not entirely secure and for this reason we cannot guarantee the security or integrity of any personal data that are transferred from you or to you via the internet.</p>

            <h2>8. Monitoring</h2>
            <p>We may monitor and record communications with you (such as telephone conversations, texts and emails) for the purpose of providing our services. </p>

            <h2>9. Information about other individuals</h2>
            <p>If you give us information on behalf of someone else, you confirm that the other person has appointed you to act on their behalf and has agreed that you can give consent on his/her behalf to the processing of their data and receive on their behalf any data protection notices.</p>

            <h2>10. Your rights</h2>
            <p>You can ask us not to use your data for marketing. 
              You can do this by ticking the relevant boxes on our forms, or by contacting us at any time at hello@textend.co.uk </p>
            <p>Under the GDPR, you have the right to:</p>
            <ul>
              <li> request access to, deletion of or correction of, your personal data held by us 	at no cost to you; </li>
              <li>request that your personal data be transferred to another person (data 	portability); </li>
              <li>be informed of what data processing is taking place;</li>
              <li>restrict processing;</li>
              <li>to object to processing of your personal data; and</li>
              <li>complain to a supervisory authority.</li>
            </ul>
            <p>You also have rights with respect to automated decision-making and profiling as set out in section 11 below. </p>
            <p>To enforce any of the foregoing rights or if you have any other questions about our 	site or this Policy, please contact us at hello@textend.co.uk.</p>

            <h2> 11. Automated Decision-Making and Profiling</h2>
            <ul class="no-bullet">
              <li>11.1	In the event that we use personal data for the purposes of automated decision-making and those decisions have a legal (or similarly significant effect) on you, you have the right to challenge to such decisions under GDPR, requesting human intervention, expressing their own point of view, and obtaining an explanation of the decision from us.</li>
              <li>11.2	The right described in section 11.1 does not apply in the following circumstances:
            <ol class="ol-list">
                  <li>the decision is necessary for the entry into, or performance of, a contract 	between the you and us;</li>
                  <li>the decision is authorised by law; or</li>
                  <li>you have given you explicit consent.</li>
                </ol>
              </li>
              <li>11.3 Where we use your personal data for profiling purposes, the following shall apply:
            <ol class="ol-list">
                  <li>Clear information explaining the profiling will be provided, including its significance and the likely consequences;</li>
                  <li>Appropriate mathematical or statistical procedures will be used;</li>
                  <li>Technical and organisational measures necessary to minimise the risk of errors and to enable such errors to be easily corrected shall be implemented; and</li>
                  <li>All personal data processed for profiling purposes shall be secured in order to prevent discriminatory effects arising out of profiling.</li>
                </ol>
              </li>
            </ul>

            <h2> 12. Contact</h2>
            <p>We welcome your feedback and questions. If you wish to contact us, please send us an email. hello@textend.co.uk </p>
            <p>We may change this privacy policy from time to time. You should check this policy occasionally to ensure you are aware of the most recent version that will apply each time you access this website.</p>

            <br />            
            
          </div>
        </div>
        <FooterTmpl />
      </div>
     
    </div>
  )
}


export default PrivacyPageTmpl;
