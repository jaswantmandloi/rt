import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../Shared/Routes';
import FooterTmpl from '../Footer/FooterTmpl';


function EulaPageTmpl() {
  
  return (
    <div class="inner-container">
  <div class="form-signin">
    <div class="form-label-group header-logo"> 
    <img src="images/logo.jpg" class="logo logo-login" alt="" />
      <h1 class="login-marb text-center">TEXTEND END USER LICENCE AGREEMENT</h1>
    </div>
    <div class="form-body terms">
      <div class="form-row2">
        <h2>Definitions</h2>
        <p> "<b>Content</b>" means the audio, text, images, video or other multimedia content, software or other information or material submitted to or used on the Software;</p>
        <p> "<b>Cookie Policy</b>" means the policy available at the following <Link to={routes.cookie.path} >link</Link>, &nbsp; 
         which governs how the Li-censor uses cookies;</p>
        <p> “<b>End User Licence Agreement or EULA</b>” means these licence terms governing use of the Software;</p>
        <p>“<b>Permitted Purpose</b>” means using the Software for Textend CRM messaging and other purposes as indicated on the Licensor’s website or the description accompanying the Software. </p>
        <p> “<b>Software</b>”  means the TEXTEND CRM messaging mobile application; </p>
        <p>"<b>Privacy Policy</b>" means the policy available at the following  &nbsp;
        <Link to={routes.privacy.path} >link</Link> , 
        which governs how Licensor processes any personal data collected from You; </p>
        <p>"<b>Licensor</b>" means MAIDA HILL ENTERPRISE LIMITED company number 10574133, whose registered office is 99 Chippenham Road, London, United Kingdom, W9 2AB. A reference to us in these terms also includes our group companies from time to time. </p>
        <p>"<b>You or your</b>" means the person accessing or using the Software or Content</p>
        <br/>
        <ol class="ol-list listing-bold" type="A">
          <li>
            <h2> Property of Licensor</h2>
            <p>You may obtain a copy of this software product either by downloading it remotely from our servers or other media (“Downloaded File”). The copyright, database rights and any other intellectual property rights in the programs and data which constitute this software product (the “Software”), together with the Downloaded File on which they were supplied to You, are and remain the property of Licensor. You are licensed to use them only if You accept all the terms and conditions set out below.</p>
          </li>
          <li>
            <h2> Licence Acceptance Procedure</h2>
            <p>By clicking on the acceptance button which follows this licence agreement, You indicate acceptance of this Licence Agreement and limitation of liability set out in this Licence Agreement. Such acceptance is either on Your own behalf of on behalf of any corporate entity which employs You or which You represent (“Corporate Licensee”). In this Licence Agreement, 'You' and 'Your' include both the reader and any Corporate Licensee.</p>
          </li>
          <li>
            <h2>Licence Rejection Procedure</h2>
            <p>You should therefore read this Licence Agreement carefully before clicking on the acceptance button. If You do not accept these terms and conditions, You should not install the Software on Your mobile phone or computer and promptly (and in any event, within 14 days of receipt) (a) delete any Downloaded File (b) return any other items provided that are part of this product; and (c) provide Your dated proof of purchase. Any money You paid to the Licensor or a licensed reseller for the Software will be refunded. </p>
          </li>
          <li>
            <h2>Other Agreements</h2>
            <p>If Your use of these programs and data is pursuant to an executed Licence Agreement, such agreement shall apply instead of the following terms and conditions. You also agree to that Your use of the Software is subject to the Privacy Policy and Cookie Policy.</p>
          </li>
        </ol>
        <br/>
        <ol class="ol-list listing-bold" type="1">
          <li>
            <h2>Intellectual Property / Ownership</h2>
            <p>The Software and all intellectual property rights in it including the Software are owned by Licensor. Intellectual property rights means rights such as: copyright, trade marks, domain names, design rights, database rights, patents and all other intellectual property rights of any kind whether or not they are registered or unregistered (anywhere in the world). You agree not to adjust, to try to circumvent, or delete any notices contained on the Software. You hereby grant Licensor a royalty free, non-exclusive, irrevocable, worldwide licence to use any Content for the Permitted Purpose. The Software and related documentation are copyrighted works of authorship, and are also protected under applicable database laws. The Licensor retains ownership of the Software and all subsequent copies of the Software, regardless of the form in which the copies may exist. This licence is not a sale of the original software or any copies. </p>
          </li>
          <li>
            <h2>Payment and Subscription</h2>
            <p> You are entitled to use the Software for the length of time specified in the pricing schedule by purchasing the applicable subscription. Any password, licence key or similar installation or usage control codes provided by the Licensor to Licensee is considered the confidential information of Licensor, and Licensee must hold such information in strict confidence. Licensor reserves the right to charge for updates, and ongoing support &amp; maintenance. </p>
          </li>
          <li>
            <h2>Licence</h2>
            <p> Provided that the applicable subscription has not expired, the Licensor grants to You a limited, non-exclusive licence to use the Software for the Permitted Purpose accordance with the applicable subscription type and pricing schedule provided by the Licensor from time-to-time. After expiry of the subscription, You cannot use the Software. </p>
          </li>
          <li>
            <h2>Licence Restrictions</h2>
            <p>When using the Software you agree not to: </p>
            <ol class="ol-list list-small" type="A">
              <li>Assist in disruption of the Software or the servers and networks which are connected to the Software, or breach and rules or regulations of the networks connected to the Software;</li>
              <li>Use the Software for a fraudulent or illegal purpose, or to use the Software to harvest personal data without prior consent;</li>
              <li>Amend any Content in order to disguise its origin and prevent detection by the Content owner or prevent unsubscription from receiving marketing notifications;</li>
              <li>Upload, download, send, transmit or publish any Content that infringes on the intellectual property rights of any owner;</li>
              <li>Upload, download, send, transmit or publish any Content that contains software viruses or malicious code;</li>
              <li>Upload, download, send, transmit or publish any Content that is unlawful, threatening, obscene, defamatory, libelous, harassing, hateful, racially offensive, or encourages conduct that would be considered a criminal offense, gives rise to civil liability, violate any law, or is otherwise inappropriate; or</li>
              <li>Provide false details or misrepresent your affiliation with any party. </li>
            </ol>
            <br/>
            <p>You may not use, copy, modify or transfer the Software (including any related documentation) or any copy, in whole or in part, including any print-out of all or part of any database, except as expressly provided for in this licence. If You transfer possession of any copy of the Software to another party except as provided above, Your licence is automatically terminated. You may not translate, reverse engineer, decompile, disassemble, modify or create derivative works based on the Software, except as expressly permitted by law. In some jurisdictions, Licensor consent may not be required for limited decompilation. Any information supplied by Licensor or obtained by you, as permitted under applicable law, may only be used by you for the purpose of creating an independent program that can be operated with the Software or with another program and may not be disclosed to any third party or used to create any software which is substantially similar to the expression of the Software or used for any other act which infringes Licensor’s copyright. You may not vary, delete or obscure any notices of proprietary rights or any product identification or restrictions on or in the Software.</p>
            <p>You agree not to not to, translate, merge, adapt, vary, alter or modify, the whole or any part of the Software nor permit the Software or any part of it to be combined with, or become incorporated in, any other programs, except as expressly permitted in this licence agreement. </p>
            <p>You agree not to use the Software via any communications network or by means of remote access. Third parties (outside the Corporate Licensee) shall not be permitted to access or use the Software, and including any use in any application service provider environment, service bureau, software-as-as-service or time-sharing arrangements.</p>
          </li>
          <li>
            <h2>No Transfer </h2>
            <p>The Software is licensed only to You. You may not rent, lease, loan, sub-license, sell, assign, pledge, transfer or otherwise dispose of the Software, on a temporary or permanent basis, without the prior written consent of the Licensor. </p>
          </li>
          <li>
            <h2>Undertakings</h2>
            <p>You undertake to:<br/>
              ensure that, prior to use of the Software by Your employees or agents, all such parties are notified of this licence and the terms of this Agreement;</p>
            <p>reproduce and include our copyright notice (or such other party's copyright notice as specified on the Software) on all and any copies of the Software, including any partial copies of the Software;</p>
            <p>hold all drawings, specifications, data (including object and source codes), software listings and all other information relating to the Software confidential and not at any time, during this licence or after its expiry, disclose the same, whether directly or indirectly, to any third party without the Licensor's consent.</p>
          </li>
          <li>
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law our liability is excluded for loss, injury or damage (whether direct or indirect or consequential or incidental or special) arising out of or in connection with your use of the Content or Software including without limitation any and all losses relating to or resulting from:</p>
            <ul class="ol-list list-small">
              <li>their accuracy, reliability, completeness, suitability, merchantability or fitness for purpose;</li>
              <li>any reliance upon or use of or actions taken or not taken or decisions made on the basis of anything contained therein;</li>
              <li>inability at any time to obtain access to any part of the Website; or</li>
              <li>any computer viruses or spyware or malware of any description or any material which might adversely affect the operation of any computer hardware or software or any communications network which affects you as a result of you accessing the Website,</li>
            </ul>
            <br/>
            <p>The above provisions do not affect our liability for death or personal injury arising from our negligence, fraud or fraudulent misrepresentation or for any other liability which is not permitted to be excluded or limited by applicable laws.</p>
          </li>
          <li>
            <h2>Indemnity</h2>
            <p>You agree to hold harmless, indemnify and defend the Licensor, its officers, directors, employees and third party suppliers against any loss, damage, fine, or expense, including legal fees arising out of or related to any claim that you have used this Software in violation of this Licence Agreement, the applicable laws in your jurisdiction or third party intellectual property rights. </p>
          </li>
          <li>
            <h2>Your Statutory Rights</h2>
            <p>This licence gives You specific legal rights and You may also have other rights that vary from country to country. Some jurisdictions do not allow the exclusion of implied warranties, or certain kinds of limitations or exclusions of liability, so the above limitations and exclusions may not apply to You. Other jurisdictions allow limitations and exclusions subject to certain conditions. In such a case the above limitations and exclusions shall apply to the fullest extent permitted by the laws of such applicable jurisdictions. If any part of the above limitations or exclusions is held to be void or unenforceable, such part shall be deemed to be deleted from this Agreement and the remainder of the limitation or exclusion shall continue in full force and effect. Any rights that You may have as a consumer (i.e. a purchaser for private as opposed to business, academic or government use) are not affected. You hereby acknowledge that once you have downloaded the Software and accepted this Licence Agreement, your rights of cancellation under the&nbsp;Consumer Rights Act 2015 shall not apply. </p>
          </li>
          <li>
            <h2>Term</h2>
            <p>The licence is effective until terminated by either party or expiry of the applicable licence term. If Licensor wishes to terminate the licence prior to the applicable licence term, it may do so by providing notice in writing, and any money You paid to the Licensor or a licensed reseller for the Software will be refunded. You may terminate the licence at any time by destroying the Software together with all copies in any form. The licence will also terminate upon conditions set out elsewhere in this Agreement or if You fail to comply with any term or condition of this Agreement or if You fail to pay any charges owing in respect of the Software (including support and maintenance, if applicable) or if You voluntarily return the Software to us. You agree upon such termination to destroy the Software together with all copies in any form. </p>
            <p>So that there is no uncertainty, termination of the licence does not remove, limit or otherwise affect any rights, obligations, demands, claims or remedies that have arisen under this Agreement prior to termination. Those rights, obligations, demands, claims and remedies will remain in effect despite termination of the licence.</p>
            <p>Licensor shall have the right to terminate the licence without a refund obligation, if Licensor becomes aware of evidence satisfactory, in Licensor's sole discretion, to establish that the Software is being used without authorisation by a party other than the Licensee. </p>
            <p>The provisions regarding Intellectual Property, Limitation of Liability, Indemnity and Governing Law shall survive such termination.</p>
          </li>
          <li>
            <h2>Data Protection</h2>
            <h2>Definition</h2>
            <p><b>Data Protection Legislation:</b>
            </p><p>(i) unless and until the GDPR is no longer directly applicable in the UK, the General Data Protection Regulation ((EU) 2016/679) and any national implementing laws, regulations and secondary legislation, as amended or updated from time to time, in the UK and then </p>
            <p>(ii) any successor legislation to the GDPR or the Data Protection Act 1998.</p>
            <p></p>
            <ol class="ol-list list-small list-unstyled point-view">
              <li><b class="mr-10">11.1</b>In so far as required, both parties agree that they will comply with all applicable requirements of the Data Protection Legislation. This clause 11.1 is in addition to, and does not relieve, remove or replace, a party's obligations under the Data Protection Legislation.</li>
              <li><b class="mr-10">11.2</b>The parties acknowledge that for the purposes of the Data Protection Legislation, You are the data controller and the Licensor is the data processor (where Data Controller and Data Processor have the meanings as defined in the Data Protection Legislation). </li>
              <li><b class="mr-10">11.3</b>Without prejudice to the generality of clause 11.1, You will ensure that You have all necessary appropriate consents and notices in place to enable lawful transfer of the Personal Data to the Licensor for the duration and purposes of this agreement.</li>
              <li><b class="mr-10">11.4</b>Without prejudice to the generality of clause 11.1, the Licensor warrants and undertakes that it shall, in relation to any Personal Data processed in connection with the performance by the Licensor of its obligations under this agreement:
                <ol class="ol-list list-small" type="A">
                  <li>process that Personal Data only on your express instructions unless the Licensor is required by the laws of any member of the European Union or by the laws of the European Union applicable to the Licensor to process Personal Data (Applicable Laws). Where the Licensor is relying on laws of a member of the European Union or European Union law as the basis for processing Personal Data, the Licensor shall promptly notify You of this before performing the processing required by the Applicable Laws unless those Applicable Laws prohibit the Licensor from so notifying You;</li>
                  <li>ensure that it has in place appropriate technical and organisational measures, to protect against unauthorised or unlawful processing of Personal Data and against accidental loss or destruction of, or damage to, Personal Data, appropriate to the harm that might result from the unauthorised or unlawful processing or accidental loss, destruction or damage and the nature of the data to be protected, having regard to the state of technological development and the cost of implementing any measures (those measures may include, where appropriate, pseudonymising and encrypting Personal Data, ensuring confidentiality, integrity, availability and resilience of its systems and services, ensuring that availability of and access to Personal Data can be restored in a timely manner after an incident, and regularly assessing and evaluating the effectiveness of the technical and organisational measures adopted by it); </li>
                  <li>ensure that all personnel who have access to and/or process Personal Data are obliged to keep the Personal Data confidential; and</li>
                  <li>not transfer any Personal Data outside of the European Economic Area unless your prior express consent has been obtained and the following conditions are fulfilled:
                    <ol class="ol-list list-small" type="I">
                      <br/>
                      <li> You or the Licensor has provided appropriate safeguards in relation to the transfer; </li>
                      <li>the data subject has enforceable rights and effective legal remedies;</li>
                      <li>the Licensor complies with its obligations under the Data Protection Legislation by providing an adequate level of protection to any Personal Data that is transferred; and</li>
                      <li>the Licensor complies with reasonable instructions notified to it in advance by You with respect to the processing of the Personal Data;</li>
                     
                    </ol>
                  </li>
					 <li>assist You, at your cost, in responding to any request from a Data Subject (as defined in the Data Protection Legislation) and in ensuring compliance with its obligations under the Data Protection Legislation with respect to security, breach notifications, impact assessments and consultations with supervisory authorities or regulators;</li>
                      <li>notify You without undue delay on becoming aware of a Personal Data breach;</li>
                  <li>at your written direction, delete or return Personal Data and copies thereof to You on termination of the agreement unless required by Applicable Law to store the Personal Data; and</li>
                  <li>maintain complete and accurate records and information to demonstrate its compliance with this clause 11.4 </li>
                </ol>
              </li>
              <li><b class="mr-10">11.5</b>The Licensor may enter with the third-party processor into a written agreement incorporating terms which are substantially similar to those set out in this clause 11.5. As between You and the Licensor, the Licensor shall remain fully liable for all acts or omissions of any third-party processor appointed by it pursuant to this clause 11.5.</li>
            </ol>
          </li>
          <li>
            <h2>General </h2>
            <p>You agree that the Licensor shall have the right, after supplying undertakings as to confidentiality, to audit any computer system on which the Software are installed in order to verify compliance with this software licence.</p>
            <p>Each party irrevocably agrees that the Courts of England shall have exclusive jurisdiction to resolve any controversy or claim of whatever nature arising out of or in relation to this Agreement and the laws of England shall govern such controversy or claim.</p>
            <p>This Agreement constitutes the complete and exclusive statement of the Agreement between the Licensor and You with respect to the subject matter of this Agreement and supersedes all proposals, representations, understandings and prior agreements, whether oral or written, and all other communications between us relating to that subject matter.</p>
            <p>Any clause in this Agreement that is found to be invalid or unenforceable shall be deemed deleted and the remainder of this Agreement shall not be affected by that deletion.</p>
            <p>Failure or neglect by either party to exercise any of its rights or remedies under this Agreement will not be construed as a waiver of that party's rights nor in any way affect the validity of the whole or part of this Agreement nor prejudice that party's right to take subsequent action.</p>
            <p>This Agreement is personal to You and You may not assign, transfer, sub-contract or otherwise part with this Agreement or any right or obligation under it without the Licensor's prior written consent.</p>
            <p>Should You have any questions concerning this Agreement, please contact the Licensor.</p>
            <p>The Software has been proudly developed by SODAKA Digital SEO Agency Limited and its licensees. All rights reserved.</p>
            <p>This Licence Agreement is dated 1 March 2018.</p>
          </li>
        </ol>
        <br/>
        <br/>
      </div>
    </div>
    <FooterTmpl />
  </div>
  
</div>
  )
}


export default EulaPageTmpl;
