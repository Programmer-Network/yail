import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tab, TabList, TabPanel, Tabs } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,

  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className='yl:w-[600px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Analytics</Tab>
          <Tab>Reports</Tab>
        </TabList>

        <TabPanel>
          <div className='yl:space-y-4'>
            <h2 className='yl:text-text yl:text-xl yl:font-semibold'>
              Overview Dashboard
            </h2>
            <p className='yl:text-text-secondary'>
              Welcome to your overview dashboard. Here you can see all your
              important metrics and KPIs at a glance.
            </p>
            <div className='yl:grid yl:grid-cols-2 yl:gap-4'>
              <div className='yl:bg-card yl:border-border yl:rounded-lg yl:p-4 yl:border'>
                <h3 className='yl:font-medium'>Total Users</h3>
                <p className='yl:text-primary yl:text-2xl yl:font-bold'>
                  12,847
                </p>
              </div>
              <div className='yl:bg-card yl:border-border yl:rounded-lg yl:p-4 yl:border'>
                <h3 className='yl:font-medium'>Revenue</h3>
                <p className='yl:text-primary yl:text-2xl yl:font-bold'>
                  $45,231
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:space-y-4'>
            <h2 className='yl:text-text yl:text-xl yl:font-semibold'>
              Analytics
            </h2>
            <p className='yl:text-text-secondary'>
              Detailed analytics and insights about your application performance
              and user behavior.
            </p>
            <div className='yl:bg-card yl:border-border yl:rounded-lg yl:p-6 yl:border'>
              <h3 className='yl:mb-2 yl:font-medium'>User Engagement</h3>
              <div className='yl:bg-background yl:flex yl:h-32 yl:items-center yl:justify-center yl:rounded'>
                <span className='yl:text-text-secondary'>
                  📊 Chart Placeholder
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:space-y-4'>
            <h2 className='yl:text-text yl:text-xl yl:font-semibold'>
              Reports
            </h2>
            <p className='yl:text-text-secondary'>
              Generate and download comprehensive reports for your business
              intelligence needs.
            </p>
            <div className='yl:space-y-2'>
              <div className='yl:bg-card yl:border-border yl:p-3 yl:border rounded'>
                <span className='yl:font-medium'>Monthly Revenue Report</span>
                <span className='yl:text-text-secondary yl:ml-2'>
                  Ready for download
                </span>
              </div>
              <div className='yl:bg-card yl:border-border yl:p-3 yl:border rounded'>
                <span className='yl:font-medium'>User Activity Report</span>
                <span className='yl:text-text-secondary yl:ml-2'>
                  Generating...
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div className='yl:w-[500px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>🏠 Home</Tab>
          <Tab>👤 Profile</Tab>
          <Tab>⚙️ Settings</Tab>
          <Tab>📊 Analytics</Tab>
        </TabList>

        <TabPanel>
          <div className='yl:space-y-3'>
            <h2 className='yl:text-text yl:text-lg yl:font-semibold'>
              🏠 Home Dashboard
            </h2>
            <p className='yl:text-text-secondary'>
              Your personalized home dashboard with quick access to everything
              you need.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:space-y-3'>
            <h2 className='yl:text-text yl:text-lg yl:font-semibold'>
              👤 User Profile
            </h2>
            <p className='yl:text-text-secondary'>
              Manage your profile information, preferences, and account
              settings.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:space-y-3'>
            <h2 className='yl:text-text yl:text-lg yl:font-semibold'>
              ⚙️ Settings
            </h2>
            <p className='yl:text-text-secondary'>
              Configure application settings, notifications, and privacy
              preferences.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:space-y-3'>
            <h2 className='yl:text-text yl:text-lg yl:font-semibold'>
              📊 Analytics
            </h2>
            <p className='yl:text-text-secondary'>
              View detailed analytics and performance metrics for your account.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const ManyTabs: Story = {
  render: () => (
    <div className='yl:w-[700px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Analytics</Tab>
          <Tab>Reports</Tab>
          <Tab>Exports</Tab>
          <Tab>API</Tab>
          <Tab>Settings</Tab>
          <Tab>Billing</Tab>
          <Tab>Support</Tab>
        </TabList>

        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Overview</h2>
          <p className='yl:text-text-secondary'>
            System overview and key metrics.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Analytics</h2>
          <p className='yl:text-text-secondary'>
            Detailed analytics and insights.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Reports</h2>
          <p className='yl:text-text-secondary'>Generate and view reports.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Exports</h2>
          <p className='yl:text-text-secondary'>
            Export data in various formats.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>API</h2>
          <p className='yl:text-text-secondary'>API documentation and keys.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Settings</h2>
          <p className='yl:text-text-secondary'>Application configuration.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Billing</h2>
          <p className='yl:text-text-secondary'>
            Manage billing and subscriptions.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='yl:mb-2 yl:text-lg yl:font-semibold'>Support</h2>
          <p className='yl:text-text-secondary'>
            Get help and contact support.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const Compact: Story = {
  render: () => (
    <div className='yl:w-[400px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>Code</Tab>
          <Tab>Preview</Tab>
          <Tab>Console</Tab>
        </TabList>

        <TabPanel>
          <div className='yl:bg-card yl:border-border yl:rounded-lg yl:p-4 yl:border'>
            <pre className='yl:text-text-secondary yl:text-sm'>
              <code>{`function hello() {
  console.log("Hello World!");
}`}</code>
            </pre>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:bg-card yl:border-border yl:rounded-lg yl:p-4 yl:text-center yl:border'>
            <p className='yl:text-text'>Preview Mode</p>
            <button className='yl:bg-primary yl:mt-2 yl:px-3 yl:py-1 yl:text-sm yl:text-white yl:rounded'>
              Hello World!
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:bg-card yl:border-border yl:rounded-lg yl:p-4 yl:border'>
            <p className='yl:text-text-secondary yl:font-mono yl:text-sm'>
              &gt; Hello World!
              <br />
              &gt; Function executed successfully
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const DisabledTabs: Story = {
  render: () => (
    <div className='yl:w-[500px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>Active</Tab>
          <Tab disabled>Disabled</Tab>
          <Tab>Another</Tab>
        </TabList>
        <TabPanel>
          <div className='yl:text-text'>This tab is active and enabled.</div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>
            This tab is disabled and cannot be selected.
          </div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>Another enabled tab.</div>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const LongLabels: Story = {
  render: () => (
    <div className='yl:w-[600px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>This is a very long tab label to test overflow</Tab>
          <Tab>Short</Tab>
          <Tab>Another extremely long tab label for testing</Tab>
        </TabList>
        <TabPanel>
          <div className='yl:text-text'>Long label tab content.</div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>Short label tab content.</div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>Another long label tab content.</div>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const MixedEnabledDisabled: Story = {
  render: () => (
    <div className='yl:w-[500px] yl:p-6'>
      <Tabs>
        <TabList>
          <Tab>First</Tab>
          <Tab disabled>Second (Disabled)</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Fourth (Disabled)</Tab>
        </TabList>
        <TabPanel>
          <div className='yl:text-text'>First tab content.</div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>Second tab is disabled.</div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>Third tab content.</div>
        </TabPanel>
        <TabPanel>
          <div className='yl:text-text'>Fourth tab is disabled.</div>
        </TabPanel>
      </Tabs>
    </div>
  )
};
