"use client";
import { useState } from "react";
import { TextWidget } from '@livechat/widget-react'

import Link from "next/link";

export default function Footer() {


  return (
    <>
    <TextWidget organizationId="39069bb6-8d3b-4c26-abb8-7bb369961d08" />
    <footer>
      <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                <div className="subscribe-title">
                    <h4>Subscribe To Our Newsletter!</h4>
                </div>
                <div className="subscribe-form">
                    <form autoComplete="off">
                        <div className="subscribe-form-field">
                            <input type="email" id="subformemail" name="subformemail" placeholder="Enter your Email Address" required  />
                            <button type="submit" title="Submit"><i className="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="footer-links footer-links-dis">
                    <h5>What We Do</h5>
                    <ul>
                        <li><Link title="Paid Search" href="https://www.mcsaatchiperformance.com/what-we-do/sem/" target="_blank">Paid Search</Link></li>
                        <li><Link title="Paid Social" href="https://www.mcsaatchiperformance.com/what-we-do/paid-social/" target="_blank">Paid Social</Link></li>
                        <li><Link title="Media Buying" href="https://www.mcsaatchiperformance.com/what-we-do/media-buying/" target="_blank">Media Buying</Link></li>
                        <li><Link title="Programmatic Advertising" href="https://www.mcsaatchiperformance.com/what-we-do/programmatic/" target="_blank">Programmatic Advertising</Link></li>
                        <li><Link title="App Marketing" href="https://www.mcsaatchiperformance.com/what-we-do/app-marketing/" target="_blank">App Marketing</Link></li>
                        <li><Link title="App Store Optimisation" href="https://www.mcsaatchiperformance.com/what-we-do/app-store-optimisation/" target="_blank">App Store Optimisation</Link></li>
                        <li><Link title="Commerce Media" href="https://www.mcsaatchiperformance.com/what-we-do/commerce-media/" target="_blank">Commerce Media</Link></li>
                        <li><Link title="GEO & AEO Services" href="https://www.mcsaatchiperformance.com/what-we-do/geo/" target="_blank">GEO & AEO Services</Link></li>
                        <li><Link title="SEO Services" href="https://www.mcsaatchiperformance.com/what-we-do/seo/" target="_blank">SEO Services</Link></li>
                        <li><Link title="Affiliate Marketing" href="https://www.mcsaatchiperformance.com/what-we-do/affiliate/" target="_blank">Affiliate Marketing</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="footer-links">
                    <h5>Industries</h5>
                    <ul>
                        <li><Link title="FinTech" href="https://www.mcsaatchiperformance.com/sectors/fintech/" target="_blank">FinTech</Link></li>
                        <li><Link title="E-Commerce" href="https://www.mcsaatchiperformance.com/sectors/e-commerce/" target="_blank">E-Commerce</Link></li>
                        <li><Link title="Gaming" href="https://www.mcsaatchiperformance.com/sectors/gaming/" target="_blank">Gaming</Link></li>
                        <li><Link title="Entertainment" href="https://www.mcsaatchiperformance.com/sectors/entertainment/" target="_blank">Entertainment</Link></li>
                        <li><Link title="Travel & Tourism" href="https://www.mcsaatchiperformance.com/sectors/travel-tourism/" target="_blank">Travel & Tourism</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="footer-links footer-links-dis">
                    <h5>Sitemap</h5>
                    <ul>
                        <li><Link title="Home" href="https://www.mcsaatchiperformance.com/" target="_blank">Home</Link></li>
                        <li><Link title="About Us" href="https://www.mcsaatchiperformance.com/about-us/" target="_blank">About Us</Link></li>
                        <li><Link title="What We Do" href="https://www.mcsaatchiperformance.com/what-we-do/" target="_blank">What We Do</Link></li>
                        <li><Link title="Sectors" href="https://www.mcsaatchiperformance.com/sectors/" target="_blank">Sectors</Link></li>
                        <li><Link title="Clients" href="https://www.mcsaatchiperformance.com/clients/" target="_blank">Clients</Link></li>
                        <li><Link title="Careers" href="https://www.mcsaatchiperformance.com/careers/" target="_blank">Careers</Link></li>
                        <li><Link title="News & views" href="https://www.mcsaatchiperformance.com/news/" target="_blank">News & views</Link></li>
                        <li><Link title="Talk to Us" href="https://www.mcsaatchiperformance.com/contact/" target="_blank">Talk to Us</Link></li>
                        <li><Link title="Sitemap" href="https://www.mcsaatchiperformance.com/sitemap/" target="_blank">Sitemap</Link></li>
                        <li><Link title="Privacy Policy" href="https://www.mcsaatchiperformance.com/privacy-policy/" target="_blank">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="footer-line"></div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                <div className="footer-social">
                    <ul>
                        <li><Link title="M+C Saatchi Performance Instagram" href="https://www.instagram.com/mc_saatchi_performance/" target="_blank"><i className="bi bi-instagram"></i></Link></li>
                        <li><Link title="M+C Saatchi Performance LinkedIn" href="https://www.linkedin.com/company/m-c-saatchi-performance/" target="_blank"><i className="bi bi-linkedin"></i></Link></li>
                        <li><Link title="M+C Saatchi Performance X" href="https://twitter.com/MCSaatchiPerf" target="_blank"><i className="bi bi-twitter-x"></i></Link></li>
                        <li><Link title="M+C Saatchi Performance YouTube" href="https://www.youtube.com/@MCSaatchiPerformanceAgency/" target="_blank"><i className="bi bi-youtube"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="footer-copyrights">
                    <p>Copyright © 2026 M+C Saatchi Performance.</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
    </>
  );
}