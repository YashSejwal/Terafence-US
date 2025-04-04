import React from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { 
  ChevronDown, 
  Shield, 
  Lock, 
  Eye, 
  AlertCircle, 
  FileText, 
  Clock,
  ChevronRight
} from "tabler-icons-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 4, 2025";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">Privacy Policy</h1>
            <p className="text-slate-500">Last Updated: {lastUpdated}</p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Data Protection</h3>
              <p className="text-slate-600">We implement industry-standard security measures to protect your data.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lock size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Privacy First</h3>
              <p className="text-slate-600">We only collect what&lsquo;s necessary and never sell your personal information.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Eye size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Transparency</h3>
              <p className="text-slate-600">Clear explanations of how we use your data and your rights.</p>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              At Terafence US, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            
            <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
              <AlertCircle size={20} className="text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                Please read this Privacy Policy carefully. By accessing or using our website, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
          
          {/* Accordion Sections */}
          <div className="space-y-4 mb-16">
            {/* Section 1 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Information We Collect</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We may collect several types of information from and about users of our website, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Personal identifiers such as name, postal address, email address, telephone number</li>
                      <li>Business information such as company name, job title, department</li>
                      <li>Technical data including IP address, browser type and version, time zone setting, operating system</li>
                      <li>Usage data including pages visited, time spent on pages, page interaction information</li>
                      <li>Marketing preferences and communication data</li>
                    </ul>
                    <p>We collect this information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Directly from you when you provide it to us (e.g., when filling forms, subscribing to services)</li>
                      <li>Automatically as you navigate through the site (using cookies and similar technologies)</li>
                      <li>From third parties, for example, our business partners</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 2 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">How We Use Your Information</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We use information that we collect about you or that you provide to us:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To present our website and its contents to you</li>
                      <li>To provide you with information, products, or services that you request from us</li>
                      <li>To fulfill any other purpose for which you provide it</li>
                      <li>To notify you about changes to our website or any products or services we offer</li>
                      <li>To improve our website and customer service</li>
                      <li>For research and analytics to improve our products and services</li>
                      <li>To respond to your inquiries and communicate with you</li>
                      <li>For marketing purposes, with your consent where required by law</li>
                      <li>In any other way we may describe when you provide the information</li>
                      <li>For any other purpose with your consent</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 3 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Disclosure of Your Information</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We may disclose personal information that we collect or you provide:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To our subsidiaries and affiliates</li>
                      <li>To contractors, service providers, and other third parties we use to support our business</li>
                      <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, or other sale</li>
                      <li>To fulfill the purpose for which you provide it</li>
                      <li>For any other purpose disclosed by us when you provide the information</li>
                      <li>With your consent</li>
                      <li>To comply with any court order, law, or legal process</li>
                      <li>To enforce our terms of use and other agreements</li>
                      <li>If we believe disclosure is necessary to protect the rights, property, or safety of Terafence US, our customers, or others</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 4 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Cookies and Tracking Technologies</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Our website uses cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                    <p>We use the following types of cookies:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                      <li><strong>Analytical cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Functional cookies:</strong> Enable enhanced functionality and personalization</li>
                      <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you visit, and the links you follow</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 5 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Data Security</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.</p>
                    <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 6 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Your Rights and Choices</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to your personal information</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your personal information</li>
                      <li>Restriction of processing of your personal information</li>
                      <li>Data portability</li>
                      <li>Objection to processing</li>
                      <li>Withdrawal of consent</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the contact information provided below.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 7 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">International Data Transfers</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Your personal information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
                    <p>If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. Your submission of such information represents your agreement to that transfer.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 8 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Changes to Our Privacy Policy</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&quot; date at the top of this page.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 9 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Contact Information</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>To ask questions or comment about this Privacy Policy and our privacy practices, contact us at:</p>
                    <div className="bg-white p-4 border border-slate-200 rounded-md">
                      <p className="font-medium">Terafence US</p>
                      <p>Email: privacy@terafence.us</p>
                      <p>Address: 12788 Royal Oaks Ln, Farmers Branch, TX 75234</p>
                      <p>Phone: +1 (732) 501-5974</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="bg-slate-50 rounded-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <FileText size={20} className="text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-slate-800">Additional Resources</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-slate-800 mb-2">Terms of Service</h4>
                <p className="text-slate-600 mb-4">Read our terms and conditions for using our services.</p>
                <a href="/terms" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View Terms 
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-slate-800 mb-2">Cookie Policy</h4>
                <p className="text-slate-600 mb-4">Learn more about how we use cookies and tracking technologies.</p>
                <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View Cookie Policy
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Version History */}
          <div className="text-center p-6 border-t border-slate-200">
            <div className="flex items-center justify-center mb-3">
              <Clock size={18} className="text-slate-400 mr-2" />
              <h3 className="text-lg font-medium text-slate-700">Policy Version History</h3>
            </div>
            <p className="text-sm text-slate-500">
              This Privacy Policy was last updated on {lastUpdated}. Previous versions of our Privacy Policy can be obtained by contacting us.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}