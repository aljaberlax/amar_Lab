import React from 'react';

const AskQuestion = () => {
    return (
        <div className='mt-24 mb-24'>
            <div>
                <p className='font-bold text-3xl text-center'>
                    Frequently Asked Questions
                </p>
            </div>
            <div className='flex flex-col gap-5  md:w-10/12 mx-auto mt-12'>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What is AmarLab?
                    </div>
                    <div class="collapse-content">
                        <p>Amarlab is an at-home-at-work pathology test service that provides diagnostic services at home for your own comfort. We go to your house, collect sample, transport them to the lab of your choice for testing and then deliver the report at your doorsteps.

                            Amarlab service is beneficial to the patients who face difficulty in travelling to receive healthcare facilities for various reasons including inaccessible transport, disability, old age or busy schedules. With the first of its kind initiative in Dhaka, people do not need to travel to and wait at diagnostic centers for medical tests. Enjoy diagnostic services from the comfort of your own home with Amarlab!</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How to Order Test?
                    </div>
                    <div class="collapse-content">
                        <p>Clients can use Facebook Messenger, AmarLab website or call directly to our hotline number 09643445566 or 01879443333 to place an order. Once they provide the name of their preferred lab, details of the tests they want to do, our agents will inform them with the test price, discounts if available and also the schedule of AmarLab’s home sample collection service.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What is the Cost?
                    </div>
                    <div class="collapse-content">
                        <p>The cost of AmarLab tests is what the chosen lab of a client charges. If there is any discount, we offer it to clients. AmarLab charges 50 taka for non-covid tests as material cost per patient and 200-taka fixed service charge. Clients can pay cash on delivery, through our website or make Bkash payment.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How Sample Collection is Done?
                    </div>
                    <div class="collapse-content">
                        <p>Our trained medical technicians will visit the household as per schedule. They will collect the sample (blood, urine, stool etc.) following standard medical practice. We have dedicated collection and transportation policy developed with the help of PUM Netherland. After collection the sample shall be transported directly to lab by our custom designed temperature-controlled carrier system.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Do you do Covid Service?
                    </div>
                    <div class="collapse-content">
                        <p>We can provide at home RT-PCR and antigen service through our partner labs. However as per government policy, for travel purpose covid tests can not be done from home.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How Do I get Report?
                    </div>
                    <div class="collapse-content">
                        <p>After lab publishes the test results, we collect the report and deliver to clients. For softcopy we deliver it as soon as they are published by email. If client requests hard copy of reports, we deliver it to the home of patients within 48 hours. There are no extra charges associated with hardcopy delivery.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How do I know how is doing my lab test?
                    </div>
                    <div class="collapse-content">
                        <p>We are in official partnership with following premium diagnostic centers:

                            1. Dr. Lal Path Labs
                            2. Popular Diagnostic
                            3. Thyrocare
                            4. IBN SINA
                            5. Islami Bank Hospital
                            6. United Hospital
                            7. Sigma Lab Chattogram and Others
                            Amarlab will provide you with reports directly from the lab and you can contact the lab to get status of your tests.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What are the Working time of AmarLab?
                    </div>
                    <div class="collapse-content">
                        <p>Amarlab is open 365 days a year to serve your heath care need. From 8 am to 10 pm Amarlab customer service accepts order. You can directly order from the website anytime or leave a message in Facebook page.
                            Sample collections are done from 8 am to 6 pm right now. But we are working to make the hours longer.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What is AmarLab's legal Standing?
                    </div>
                    <div class="collapse-content">
                        <p>Amarlab is registered under both RJSC Bangladesh and ACRA Singapore. It has license from DGHS to collect samples for lab tests. It is also member of BASIS and E-CAB.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Do you do ECG X-RAY ultra-sonography etc?
                    </div>
                    <div class="collapse-content">
                        <p>Sorry sir, x-rays at home could bring health hazards as walls in resident style buildings are not built heavily to endure this. Also, the environment at home could not be controlled during x-rays.

                            Ultrasonography and similar imaging tests are not possible to do from home.

                            However, we can do at home ECG at Dhaka city.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AskQuestion;