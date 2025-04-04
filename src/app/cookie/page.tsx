/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { 
  ChevronDown, 
  Cookie, 
  Settings, 
  ChartBar, 
  AlertCircle, 
  FileText, 
  Clock,
  ChevronRight
} from "tabler-icons-react";

export default function CookiePolicyPage() {
  const lastUpdated = "April 4, 2025";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">Cookie Policy</h1>
            <p className="text-slate-500">Last Updated: {lastUpdated}</p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Cookie size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Essential Cookies</h3>
              <p className="text-slate-600">Necessary for our website to function properly and cannot be switched off.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Settings size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cookie Controls</h3>
              <p className="text-slate-600">You can control non-essential cookies through your browser settings.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <ChartBar size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Data Analytics</h3>
              <p className="text-slate-600">We use cookies to analyze website traffic and optimize your experience.</p>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              At Terafence US, we use cookies and similar technologies to enhance your browsing experience, 
              analyze site traffic, personalize content, and serve targeted advertisements. This Cookie Policy 
              explains how we use cookies, your choices regarding cookies, and more information about cookies in general.
            </p>
            
            <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
              <AlertCircle size={20} className="text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. 
              </p>
            </div>
          </div>
          
          {/* Accordion Sections */}
          <div className="space-y-4 mb-16">
            {/* Section 1 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">What Are Cookies?</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
                    <p>Cookies help:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Make our website work as you'd expect</li>
                      <li>Remember your settings during and between visits</li>
                      <li>Improve the speed/security of the site</li>
                      <li>Allow you to share pages with social networks</li>
                      <li>Continuously improve our website for you</li>
                      <li>Make our marketing more efficient</li>
                    </ul>
                    <p>Cookies are not harmful and do not contain any information that directly identifies you as a person.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 2 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Types of Cookies We Use</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We use four main types of cookies:</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Essential Cookies</h4>
                        <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.</p>
                        <p className="text-sm text-slate-500 mt-1">Examples: Authentication cookies, load balancing cookies</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Analytical/Performance Cookies</h4>
                        <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</p>
                        <p className="text-sm text-slate-500 mt-1">Examples: Google Analytics, Adobe Analytics</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Functional Cookies</h4>
                        <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                        <p className="text-sm text-slate-500 mt-1">Examples: Live chat services, user preference cookies</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Targeting/Advertising Cookies</h4>
                        <p>These cookies are used to make advertising messages more relevant to you and your interests. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.</p>
                        <p className="text-sm text-slate-500 mt-1">Examples: Google Ads, Facebook Pixel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 3 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Specific Cookies We Use</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>The table below lists some of the cookies we use and why:</p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="border border-slate-300 px-4 py-2 text-left">Cookie Name</th>
                            <th className="border border-slate-300 px-4 py-2 text-left">Purpose</th>
                            <th className="border border-slate-300 px-4 py-2 text-left">Duration</th>
                            <th className="border border-slate-300 px-4 py-2 text-left">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-slate-300 px-4 py-2">_ga</td>
                            <td className="border border-slate-300 px-4 py-2">Used to distinguish users for Google Analytics</td>
                            <td className="border border-slate-300 px-4 py-2">2 years</td>
                            <td className="border border-slate-300 px-4 py-2">Analytical</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="border border-slate-300 px-4 py-2">_gid</td>
                            <td className="border border-slate-300 px-4 py-2">Used to distinguish users for Google Analytics</td>
                            <td className="border border-slate-300 px-4 py-2">24 hours</td>
                            <td className="border border-slate-300 px-4 py-2">Analytical</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 px-4 py-2">_gat</td>
                            <td className="border border-slate-300 px-4 py-2">Used to throttle request rate</td>
                            <td className="border border-slate-300 px-4 py-2">1 minute</td>
                            <td className="border border-slate-300 px-4 py-2">Analytical</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="border border-slate-300 px-4 py-2">JSESSIONID</td>
                            <td className="border border-slate-300 px-4 py-2">Preserves user session state across page requests</td>
                            <td className="border border-slate-300 px-4 py-2">Session</td>
                            <td className="border border-slate-300 px-4 py-2">Essential</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 px-4 py-2">cookie_consent</td>
                            <td className="border border-slate-300 px-4 py-2">Stores your cookie consent settings</td>
                            <td className="border border-slate-300 px-4 py-2">1 year</td>
                            <td className="border border-slate-300 px-4 py-2">Essential</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="border border-slate-300 px-4 py-2">_fbp</td>
                            <td className="border border-slate-300 px-4 py-2">Used by Facebook to deliver advertisements</td>
                            <td className="border border-slate-300 px-4 py-2">3 months</td>
                            <td className="border border-slate-300 px-4 py-2">Targeting</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm italic">Note: This is not an exhaustive list and may be updated as our website evolves.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 4 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Third-Party Cookies</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These may include:</p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                      <li><strong>Google Ads:</strong> For targeted advertising based on user behavior</li>
                      <li><strong>Facebook:</strong> For social sharing and targeted advertising</li>
                      <li><strong>LinkedIn:</strong> For professional networking features and targeted advertising</li>
                      <li><strong>HubSpot:</strong> For marketing automation and visitor identification</li>
                    </ul>
                    
                    <p>Each of these third parties has their own privacy and cookie policies. We encourage you to read these policies on their respective websites.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 5 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Managing Your Cookie Preferences</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
                    
                    <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
                    
                    <p>To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</p>
                    
                    <div className="space-y-2 mt-4">
                      <p className="font-medium">How to manage cookies in major browsers:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 6 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Do Not Track Signals</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals, but we do provide you the option to opt out of interest-based advertising by certain third parties.</p>
                    
                    <p>To learn more about Do Not Track signals, you can visit <a href="https://allaboutdnt.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">https://allaboutdnt.com/</a>.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 7 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">Changes to Our Cookie Policy</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this page.</p>
                    
                    <p>You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 8 */}
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
                    <p>If you have any questions about our Cookie Policy, please contact us at:</p>
                    
                    <div className="bg-white p-4 border border-slate-200 rounded-md">
                      <p className="font-medium">Terafence US</p>
                      <p>Email: privacy@terafence.us</p>
                      <p>Address: 123 Security Avenue, Suite 456, Cyber City, CA 90210</p>
                      <p>Phone: (800) 555-0123</p>
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
                <h4 className="font-semibold text-slate-800 mb-2">Privacy Policy</h4>
                <p className="text-slate-600 mb-4">Read our detailed Privacy Policy to understand how we protect your personal information.</p>
                <a href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View Privacy Policy 
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-slate-800 mb-2">Terms of Service</h4>
                <p className="text-slate-600 mb-4">Learn about the terms and conditions for using our services.</p>
                <a href="/terms" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View Terms of Service
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
              This Cookie Policy was last updated on {lastUpdated}. Previous versions of our Cookie Policy can be obtained by contacting us.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}