import React from 'react';

import {Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';

class  DashboardPage extends React.Component {


  btnRef26 = "#";
  btnRef27 = "#";
  btnRef28 = "#";
  btnRef29 = "#";
  btnRef30 = "#";
  btnRef31 = "#";
  btnRef32 = "#";

  render(){
    return (

      <div className="p-4">
          <div className="border-2 surface-border border-round surface-card" style={{ minHeight: '4rem' }}>

          <div className="min-h-screen flex relative lg:static" style={{ backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
            <div id="app-sidebar-7" className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30" style={{ width: '280px', backdropFilter: 'blur(10px)' }}>
                <div className="flex flex-column h-full">
                    <div className="overflow-y-auto">
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={this.btnRef26} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={this.btnRef26} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer">
                                        <span className="font-medium">FAVORITES</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-bookmark mr-2"></i>
                                            <span className="font-medium">Bookmarks</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass nodeRef={this.btnRef27} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                            <a ref={this.btnRef27} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Reports</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <StyleClass nodeRef={this.btnRef28} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                                    <a ref={this.btnRef28} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">Revenue</span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">View</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">Search</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Expenses</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-users mr-2"></i>
                                            <span className="font-medium">Team</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <Ripple />
                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex flex-column relative flex-auto">
                <div className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40" style={{ height: '60px' }}>
                    <div className="flex">
                        <StyleClass nodeRef={this.btnRef31} selector="#app-sidebar-7" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                            <a ref={this.btnRef31} className="p-ripple cursor-pointer block lg:hidden text-gray-800 mr-3">
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                    </div>
                    <StyleClass nodeRef={this.btnRef32} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                        <a ref={this.btnRef32} className="p-ripple cursor-pointer block lg:hidden text-gray-800">
                            <i className="pi pi-ellipsis-v text-2xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                </div>
                <div className="p-5 flex flex-column flex-auto">
                    <div className="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40">
        
                    </div>
                </div>
            </div>
        </div>

          </div>
      </div>

      

    );
      

  }


}

export default DashboardPage;