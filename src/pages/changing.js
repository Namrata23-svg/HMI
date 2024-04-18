import React from 'react'
import { Link } from "@bosch/react-frok";
import { Navigation } from "@bosch/react-frok";
import { HeaderNavigationItem } from "@bosch/react-frok";
import { Header } from "@bosch/react-frok";
import { Button } from "@bosch/react-frok";


const MyComponent = () => {
  return (
    <div>
      <Header
        // breadcrumbs=
        // {
        //   <>
        //     <Link href="http://test" label="News and Stories" />
        //     <Link href="http://test" label="Internet of Things" />
        //     <Link href="http://test" label="Page Name" />
            
        //   </>
        // }
        
        menu=
        {
          <Navigation languageSelector>
            <HeaderNavigationItem
              trigger={<Button label="Products & Services" />}
            >
              <Link label="Products & Services overview" />
              <Link href="https://bosch.com" label="Mobility" />
              <Link href="#" label="At home" />
              <Link
                href="http://bosch.com/"
                label="Industry and trades"
                target="_blank"
              />
              <Link href="#" label="Connected products and services" />
              <Link href="#" label="Market-specific solutions" />
            </HeaderNavigationItem>
            <HeaderNavigationItem trigger={<Button label="Company" />}>
              <Link label="Company overview" />
              <HeaderNavigationItem trigger={<Button label="Our People" />}>
                <Link href="#" label="Our people overview" />
              </HeaderNavigationItem>
              <Link href="#" label="Annual report and figures" />
              <Link href="#" label="Our history" />
              <Link href="#" label="Sustainability" />
              <Link href="#" label="Supply chain" />
            </HeaderNavigationItem>
            <Link
              href="http://bosch.com"
              label="External link"
              target="_blank"
            />
            <Link href="http://bosch.com" label="Internal link" />
          </Navigation>
        }
        menuTrigger="Menu" onChange={function ro() {}}
        onReset={function ro() {}}
        onSubmit={function ro() {}}
        quickLinks=
        {[
        //   {
        //     icon: "login",
        //     label: "Login",
        //     onClick: function ro() {},
        //   },
          {
            icon: "chat",
            label: "Contact",
            onClick: function ro() {},
          },
        ]}
        // searchForm=
        // {{
        //   onChange: function ro() {},
        //   onSubmit: function ro() {},
        //   searchField: {
        //     id: "searchFieldId",
        //   },
        // }}
        // searchTrigger="Search" suggestions={[]}>
        > 
      </Header>

      
    </div>

    
  )
}

export default MyComponent