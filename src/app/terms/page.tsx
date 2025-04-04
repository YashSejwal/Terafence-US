/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import { 
  ChevronDown, 
  FileCheck, 
  UserCheck, 
  FileText, 
  AlertCircle, 
  Clock,
  ChevronRight,
  ShieldLock,
  Gavel
} from "tabler-icons-react";

export default function TermsOfUsePage() {
  const lastUpdated = "April 4, 2025";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">Terms of Use</h1>
            <p className="text-slate-500">Last Updated: {lastUpdated}</p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileCheck size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Acceptance of Terms</h3>
              <p className="text-slate-600">By accessing our website, you agree to be bound by these terms of use.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserCheck size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">User Responsibilities</h3>
              <p className="text-slate-600">You are responsible for ensuring that your use of our site complies with all applicable laws.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all hover:shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <ShieldLock size={24} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Intellectual Property</h3>
              <p className="text-slate-600">All content on this site is protected by intellectual property rights.</p>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Welcome to Terafence US. These Terms of Use govern your access to and use of our website, 
              products, and services. Please read these Terms carefully before using our website or services.
            </p>
            
            <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
              <AlertCircle size={20} className="text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                By accessing or using our website, you agree to be bound by these Terms of Use and all applicable 
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using or 
                accessing this site.
              </p>
            </div>
          </div>
          
          {/* Accordion Sections */}
          <div className="space-y-4 mb-16">
            {/* Section 1 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">1. Acceptance of Terms</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>By accessing or using the Terafence US website, you agree to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                    
                    <p>We may revise these Terms of Use at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Use.</p>
                    
                    <p>Any new features or tools which are added to the current website shall also be subject to the Terms of Use. You can review the most current version of the Terms of Use at any time on this page.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 2 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">2. Use License</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Terafence US's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Modify or copy the materials;</li>
                      <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                      <li>Attempt to decompile or reverse engineer any software contained on Terafence US's website;</li>
                      <li>Remove any copyright or other proprietary notations from the materials; or</li>
                      <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    
                    <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Terafence US at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 3 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">3. Disclaimer</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>The materials on Terafence US's website are provided on an 'as is' basis. Terafence US makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    
                    <p>Further, Terafence US does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 4 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">4. Limitations</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>In no event shall Terafence US or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Terafence US's website, even if Terafence US or a Terafence US authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                    
                    <p>Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 5 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">5. Accuracy of Materials</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>The materials appearing on Terafence US's website could include technical, typographical, or photographic errors. Terafence US does not warrant that any of the materials on its website are accurate, complete or current. Terafence US may make changes to the materials contained on its website at any time without notice. However, Terafence US does not make any commitment to update the materials.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 6 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">6. Links</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Terafence US has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Terafence US of the site. Use of any such linked website is at the user's own risk.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 7 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">7. Modifications</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>Terafence US may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 8 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">8. User Accounts</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our website.</p>
                    
                    <p>You are responsible for safeguarding the password that you use to access our website and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                    
                    <p>You may not use as a username the name of another person or entity that is not lawfully available for use, or a name or trademark that is subject to any rights of another person or entity without appropriate authorization.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 9 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">9. Intellectual Property</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>The website and its original content, features, and functionality are owned by Terafence US and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                    
                    <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Terafence US.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 10 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">10. Governing Law</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
                    
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                    
                    <p>These Terms constitute the entire agreement between us regarding our website, and supersede and replace any prior agreements we might have had between us regarding the website.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 11 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">11. Indemnification</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>You agree to defend, indemnify, and hold harmless Terafence US, its parent, subsidiaries, affiliates, and their respective directors, officers, employees, contractors, agents, suppliers, licensors, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the website.</p>
                  </div>
                </div>
              </details>
            </div>
            
            {/* Section 12 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-5 bg-white cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-800">12. Contact Information</h3>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="p-5 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 space-y-4">
                    <p>If you have any questions about these Terms of Use, please contact us at:</p>
                    
                    <div className="bg-white p-4 border border-slate-200 rounded-md">
                      <p className="font-medium">Terafence US</p>
                      <p>Email: legal@terafence.us</p>
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
                <h4 className="font-semibold text-slate-800 mb-2">Cookie Policy</h4>
                <p className="text-slate-600 mb-4">Learn more about how we use cookies and tracking technologies.</p>
                <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  View Cookie Policy
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Legal Banner */}
          <div className="bg-slate-100 rounded-lg p-6 mb-16 border border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <Gavel size={24} className="text-slate-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Legal Disclaimer</h3>
                <p className="text-slate-600 text-sm">
                  This Terms of Use document is provided for general informational purposes only and does not constitute legal advice. 
                  Terafence US makes no representations or warranties regarding the accuracy or completeness of these terms or their 
                  suitability for any specific context. Users are advised to consult with qualified legal counsel to ensure 
                  compliance with all applicable laws and regulations relevant to their specific circumstances.
                </p>
              </div>
            </div>
          </div>
          
          {/* Version History */}
          <div className="text-center p-6 border-t border-slate-200">
            <div className="flex items-center justify-center mb-3">
              <Clock size={18} className="text-slate-400 mr-2" />
              <h3 className="text-lg font-medium text-slate-700">Document Version History</h3>
            </div>
            <p className="text-sm text-slate-500">
              These Terms of Use were last updated on {lastUpdated}. Previous versions can be obtained by contacting us.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}