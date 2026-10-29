let inspectedItems=[];

function inspectSender(){
    showEvidence("sender");
}

function inspectMessage(){
    showEvidence("message");
}

function inspectLink(){
    showEvidence("link");
}

function showEvidence(type){
    let result=document.getElementById("result");
    let title="";
    let explanation="";

    if(type=="sender"){
        title="Sender Investigation";

        explanation=`
            <div class="visual-panel">
                <h3>Sender Check</h3>
                <div class="visual-node">
                    Incoming Email
                    <p>rewards@example.test</p>
                </div>
                <div class="visual-arrow">↓</div>
                <div class="visual-warning">
                    Sender Not Verified
                    <p>Check whether the sender belongs to the claimed organization.</p>
                </div>
            </div>
            <p>An unfamiliar sender is a reason to investigate,
            but it does not prove an attack by itself.</p>
        `;
    }
    else if(type=="message"){
        title="Message Investigation";

        explanation=`
            <div class="visual-panel">
                <h3>Message Warning Signs</h3>
                <div class="visual-warning">
                    Unexpected Reward
                    <p>You were told you won a phone.</p>
                </div>
                <div class="visual-warning">
                    Urgent Wording
                    <p>"Claim your prize before the offer expires!"</p>
                </div>
            </div>
            <p>Scammers may use rewards and urgency to pressure
            people into acting without checking.</p>
        `;
    }
    else if(type=="link"){
        title="Reward Link Investigation";

        explanation=`
            <div class="visual-panel">
                <h3>Possible Phishing Attack Path</h3>
                <div class="visual-node">
                    Step 1: Deceptive Email
                </div>
                <div class="visual-arrow">↓</div>
                <div class="visual-node">
                    Step 2: Suspicious Link
                </div>
                <div class="visual-arrow">↓</div>
                <div class="visual-warning">
                    Step 3: Fake Login Page
                    <p>Entered passwords could be stolen.</p>
                </div>
            </div>
            <p>Do not open suspicious links. Visit the official
            website directly to verify an offer.</p>
            <p>This is a fictional demonstration. No website is opened.</p>
        `;
    }

    if(!inspectedItems.includes(type)){
        inspectedItems.push(type);
    }

    result.innerHTML=`
        <h3>${title}</h3>
        ${explanation}
        <p><b>Evidence inspected:</b> ${inspectedItems.length} of 3</p>
    `;
}

function showConclusion(){
    let result=document.getElementById("result");

    if(inspectedItems.length<3){
        result.innerHTML=`
            <div class="visual-warning">
                <h3>Investigation Incomplete</h3>
                <p>Inspect the sender, message, and reward link
                before generating your report.</p>
                <p>Evidence inspected: ${inspectedItems.length} of 3</p>
            </div>
        `;
        return;
    }

    result.innerHTML=`
        <h3>Investigation Report: PH-01</h3>

        <div class="visual-panel">
            <div class="visual-warning">
                <h3>Conclusion: Suspicious Email</h3>
                <p>The email contains multiple phishing warning signs.</p>
            </div>

            <h3>Evidence Identified</h3>
            <p>✓ Sender identity was not verified.</p>
            <p>✓ The message offered an unexpected reward.</p>
            <p>✓ The reward link was not verified.</p>

            <div class="visual-safe">
                <h3>Recommended Actions</h3>
                <p>Do not click suspicious links. Verify the offer through
                the official website and report the email if appropriate.</p>
            </div>
        </div>

        <p>This report describes the fictional training email,
        not a live security incident.</p>
    `;
}
let otpEvidenceChecked=[];

function inspectCaller(){
    if(!otpEvidenceChecked.includes("caller")){
        otpEvidenceChecked.push("caller");
    }

    document.getElementById("otp-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Evidence 01: Caller Identity</h3>

            <div class="visual-node">
                📞 Incoming Caller
                <p>Unknown Number</p>
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-warning">
                ⚠️ Identity Not Verified
                <p>
                    A caller ID or a claim of being bank support
                    does not prove the caller's identity.
                </p>
            </div>

            <h3>Investigation Finding</h3>
            <p>
                Do not trust an unexpected caller based only on
                what they say. End the call and contact the bank
                using its official app or verified number.
            </p>
        </div>
    `;
}

function inspectSMS(){
    if(!otpEvidenceChecked.includes("sms")){
        otpEvidenceChecked.push("sms");
    }

    document.getElementById("otp-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Evidence 02: SMS Analysis</h3>

            <div class="visual-node">
                📩 Verification Message
                <p>A code is intended for account verification.</p>
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-warning">
                🔐 Confidential Information
                <p>
                    The message warns you to keep the code private.
                    Sharing it could allow an attacker to complete
                    an account action.
                </p>
            </div>

            <h3>Investigation Finding</h3>
            <p>
                Read the complete message carefully. Never share
                verification codes with callers or messages
                requesting them.
            </p>
        </div>
    `;
}

function inspectOTPRequest(){
    if(!otpEvidenceChecked.includes("request")){
        otpEvidenceChecked.push("request");
    }

    document.getElementById("otp-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Evidence 03: Suspicious OTP Request</h3>

            <div class="visual-node">
                📞 Caller Claims to Be Bank Support
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-warning">
                🚩 Caller Requests Your OTP
                <p>
                    The caller is asking you to disclose a
                    confidential verification code.
                </p>
            </div>

            <h3>Possible Attack</h3>
            <p>
                This may be social engineering: manipulating
                someone into revealing sensitive information.
            </p>

            <div class="visual-safe">
                🛡️ Correct Response
                <p>
                    Do not disclose the OTP. End the call and
                    independently verify the situation with your bank.
                </p>
            </div>
        </div>
    `;
}

function otpAnswer(choice){
    let result=document.getElementById("otp-decision");

    if(choice=="share"){
        result.innerHTML=`
            <div class="visual-panel">
                <h3>Decision: OTP Shared</h3>

                <div class="visual-node">
                    📞 Suspicious Caller
                </div>

                <div class="visual-arrow">↓</div>

                <div class="visual-warning">
                    ⚠️ Code Disclosed
                    <p>
                        An attacker could use the code to attempt
                        the action it was issued for.
                    </p>
                </div>

                <h3>What Should You Do?</h3>
                <p>
                    Contact your bank immediately through an
                    official channel and report the incident.
                    Follow its advice to secure your account.
                </p>

                <p>
                    This is a simulation. No code was actually
                    shared and no account was accessed.
                </p>
            </div>
        `;
    }
    else if(choice=="refuse"){
        result.innerHTML=`
            <div class="visual-panel">
                <h3>Decision: OTP Protected</h3>

                <div class="visual-node">
                    📞 Suspicious Caller Requests the Code
                </div>

                <div class="visual-arrow">↓</div>

                <div class="visual-safe">
                    🛡️ You Refuse to Share It
                    <p>
                        You have avoided disclosing your
                        verification code to an unverified caller.
                    </p>
                </div>

                <h3>Next Step</h3>
                <p>
                    End the call and contact your bank using
                    its official app or verified phone number.
                </p>

                <p>
                    Good decision! This is the safer response.
                </p>
            </div>
        `;
    }
}

function showOTPConclusion(){
    let result=document.getElementById("otp-report");
    let count=otpEvidenceChecked.length;

    result.innerHTML=`
        <div class="visual-panel">
            <h3>Investigation Report</h3>

            <div class="visual-node">
                <strong>Incident Type</strong>
                <p>Suspected OTP-based social engineering</p>
            </div>

            <div class="visual-node">
                <strong>Evidence Reviewed</strong>
                <p>${count} of 3 investigation items examined</p>
            </div>

            <div class="visual-warning">
                <strong>Risk Assessment: Potentially High</strong>
                <p>
                    Disclosing an OTP may allow an unauthorized
                    person to complete the action the code protects.
                    The actual impact depends on the service and
                    the purpose of the code.
                </p>
            </div>

            <h3>Key Warning Signs</h3>
            <ul>
                <li>Caller identity has not been verified.</li>
                <li>The caller requests confidential information.</li>
                <li>The caller claims the code is needed to secure the account.</li>
            </ul>

            <div class="visual-safe">
                <h3>Recommended Actions</h3>
                <p>
                    Never share OTPs. End suspicious calls, contact
                    the organization through an official channel,
                    and report unexpected verification requests.
                </p>
            </div>

            <p>
                <strong>Conclusion:</strong>
                The scenario is consistent with a social engineering
                attempt. The caller's identity cannot be confirmed
                from this simulation alone.
            </p>
        </div>
    `;
}
let malwareEvidenceChecked=[];
let malwareDecision="Not decided";

function updateMalwareProgress(){
    let count=malwareEvidenceChecked.length;

    document.getElementById("mal-progress-count").innerText=count+" / 3";
    document.getElementById("mal-progress-bar").style.width=(count/3*100)+"%";
}

function inspectMalwareWebsite(){
    if(!malwareEvidenceChecked.includes("website")){
        malwareEvidenceChecked.push("website");
    }

    updateMalwareProgress();

    document.getElementById("malware-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Evidence 01: Website Inspection</h3>

            <div class="visual-node">
                🌐 Software Download Website
                <p>Offers a free video editor.</p>
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-warning">
                ⚠️ Source Not Verified
                <p>The publisher and domain have not been independently verified.</p>
            </div>

            <h3>Investigation Finding</h3>
            <p>
                Free software is not automatically malicious.
                Verify the publisher and download from its official website.
                The example domain in this lab is fictional.
            </p>
        </div>
    `;
}

function inspectMalwareFile(){
    if(!malwareEvidenceChecked.includes("file")){
        malwareEvidenceChecked.push("file");
    }

    updateMalwareProgress();

    document.getElementById("malware-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Evidence 02: File Inspection</h3>

            <div class="visual-node">
                📁 VideoEditor_Setup.exe
                <p>Windows executable · 45 MB</p>
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-warning">
                ⚠️ Publisher Unknown
                <p>The signature and authenticity have not been verified in this simulation.</p>
            </div>

            <h3>What to Check</h3>
            <ul>
                <li>Is the download from the official publisher?</li>
                <li>Is the digital signature valid?</li>
                <li>Does reputable security software flag the file?</li>
            </ul>

            <div class="visual-safe">
                🛡️ Remember
                <p>An EXE file is not necessarily malware. Verify it before running it.</p>
            </div>
        </div>
    `;
}

function analyzeMalwareRisk(){
    if(!malwareEvidenceChecked.includes("risk")){
        malwareEvidenceChecked.push("risk");
    }

    updateMalwareProgress();

    document.getElementById("malware-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Evidence 03: Attack Flow</h3>

            <div class="visual-node">
                🌐 Unverified Website
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-node">
                📦 Suspicious Installer
            </div>

            <div class="visual-arrow">↓</div>

            <div class="visual-warning">
                ⚠️ If Malicious and Executed
                <p>It could attempt to steal data, install unwanted software, or damage files.</p>
            </div>

            <h3>Potential Impact</h3>
            <p>
                Possible consequences include data theft, unauthorized access,
                and disruption. These are potential outcomes, not confirmed
                behavior of this fictional file.
            </p>
        </div>
    `;
}

function showDownloadDetails(){
    document.getElementById("malware-evidence").innerHTML=`
        <div class="visual-panel">
            <h3>Download Details</h3>

            <div class="visual-node">
                📦 VideoEditor_Setup.exe
                <p>File size: 45 MB</p>
            </div>

            <div class="visual-warning">
                ⚠️ Download Not Started
                <p>The publisher is unverified in this scenario.</p>
            </div>

            <p>
                The Download Now button is part of the simulation.
                No file is downloaded. Investigate the source before
                trusting unfamiliar software.
            </p>
        </div>
    `;
}

function malwareAnswer(choice){
    let result=document.getElementById("malware-decision");

    if(choice=="install"){
        malwareDecision="Chose to install an unverified file";

        result.innerHTML=`
            <div class="visual-panel">
                <h3>Decision: Download and Install</h3>

                <div class="visual-node">
                    📦 Unverified Installer
                </div>

                <div class="visual-arrow">↓</div>

                <div class="visual-warning">
                    ⚠️ Potential Security Exposure
                    <p>If the file were malicious, executing it could put the device or data at risk.</p>
                </div>

                <h3>Recommended Response</h3>
                <p>Stop before running the installer. Verify the source and publisher first.</p>

                <p><strong>Simulation only:</strong> Nothing was downloaded or executed.</p>
            </div>
        `;
    }
    else if(choice=="stop"){
        malwareDecision="Chose to stop and verify the file";

        result.innerHTML=`
            <div class="visual-panel">
                <h3>Decision: Stop and Check</h3>

                <div class="visual-node">
                    📦 Unverified Installer
                </div>

                <div class="visual-arrow">↓</div>

                <div class="visual-safe">
                    🛡️ Safer Choice
                    <p>You avoided running software before verifying its source.</p>
                </div>

                <h3>Next Steps</h3>
                <ul>
                    <li>Find the official publisher website.</li>
                    <li>Verify the file's digital signature.</li>
                    <li>Scan it using reputable security software.</li>
                </ul>
            </div>
        `;
    }
}

function showMalwareConclusion(){
    let result=document.getElementById("malware-report");
    let count=malwareEvidenceChecked.length;
    let risk="Unverified - malware not confirmed";

    if(malwareDecision=="Chose to install an unverified file"){
        risk="Potentially high if the file is malicious";
    }
    else if(malwareDecision=="Chose to stop and verify the file"){
        risk="Exposure reduced by not running the file";
    }

    result.innerHTML=`
        <div class="visual-panel">
            <h3>📝 Malware Investigation Report</h3>

            <div class="visual-node">
                <strong>Incident Type</strong>
                <p>Suspicious software download</p>
            </div>

            <div class="visual-node">
                <strong>Evidence Reviewed</strong>
                <p>${count} of 3 items inspected</p>
            </div>

            <div class="visual-node">
                <strong>User Decision</strong>
                <p>${malwareDecision}</p>
            </div>

            <div class="visual-warning">
                <strong>Risk Assessment</strong>
                <p>${risk}</p>
            </div>

            <h3>Key Findings</h3>
            <ul>
                <li>Download source has not been verified.</li>
                <li>Publisher and file authenticity are unknown.</li>
                <li>No actual malware scan has been performed.</li>
            </ul>

            <div class="visual-safe">
                <h3>Recommended Actions</h3>
                <p>
                    Avoid running the file until verified. Use the official
                    publisher, check the digital signature, and scan the file
                    with reputable security tools.
                </p>
            </div>

            <p>
                <strong>Conclusion:</strong> Treat the file as untrusted
                until verified. This simulation does not prove the file is infected.
            </p>

            <button class="mal-report-btn" onclick="window.print()">
                Print / Save Report
            </button>
        </div>
    `;
}
function otpLogin(){
    let username=document.getElementById("otp-username").value.trim();
    let password=document.getElementById("otp-password").value;
    let result=document.getElementById("otp-login-result");

    if(username==""||password==""){
        result.innerHTML="Please enter dummy details in both fields.";
        return;
    }

    result.innerHTML="Simulation only: dummy details entered. In a real attack, never trust an unexpected login or OTP request. No account was accessed.";
}

function verifySimulatedOTP(){
    let code=document.getElementById("otp-code-input").value.trim();
    let result=document.getElementById("otp-verify-result");

    if(code==""){
        result.innerHTML="Please enter the fictional code shown in the message.";
        return;
    }

    if(!/^\d{5}$/.test(code)){
        result.innerHTML="Enter exactly 5 digits.";
        return;
    }

    if(code=="02306"){
        result.innerHTML="Demo code accepted! This is only a local simulation. Remember: never share a real OTP with a caller.";
    }else{
        result.innerHTML="Incorrect demo code. Check the fictional message and try again.";
    }
}
function phishingAnswer(choice){
    let result=document.getElementById("phishing-decision");

    if(choice=="click"){
        result.innerHTML="<strong>Risky decision!</strong><br>You chose to trust the reward email. A real phishing link could lead to a fake login page, credential theft, or a malicious download. In this simulation, no link was opened.";
    }
    else if(choice=="report"){
        result.innerHTML="<strong>Good decision!</strong><br>You avoided the suspicious reward button. Report the email using your email provider's reporting feature, and verify unexpected rewards through an independently trusted source.";
    }
}