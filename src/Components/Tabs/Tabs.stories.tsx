import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tab, TabList, TabPanel, Tabs } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className='w-[600px] p-6'>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Analytics</Tab>
          <Tab>Reports</Tab>
        </TabList>

        <TabPanel>
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-text'>
              Overview Dashboard
            </h2>
            <p className='text-text-secondary'>
              Welcome to your overview dashboard. Here you can see all your
              important metrics and KPIs at a glance.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-card p-4 rounded-lg border border-border'>
                <h3 className='font-medium'>Total Users</h3>
                <p className='text-2xl font-bold text-primary'>12,847</p>
              </div>
              <div className='bg-card p-4 rounded-lg border border-border'>
                <h3 className='font-medium'>Revenue</h3>
                <p className='text-2xl font-bold text-primary'>$45,231</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-text'>Analytics</h2>
            <p className='text-text-secondary'>
              Detailed analytics and insights about your application performance
              and user behavior.
            </p>
            <div className='bg-card p-6 rounded-lg border border-border'>
              <h3 className='font-medium mb-2'>User Engagement</h3>
              <div className='h-32 bg-background rounded flex items-center justify-center'>
                <span className='text-text-secondary'>
                  📊 Chart Placeholder
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-text'>Reports</h2>
            <p className='text-text-secondary'>
              Generate and download comprehensive reports for your business
              intelligence needs.
            </p>
            <div className='space-y-2'>
              <div className='bg-card p-3 rounded border border-border'>
                <span className='font-medium'>Monthly Revenue Report</span>
                <span className='text-text-secondary ml-2'>
                  Ready for download
                </span>
              </div>
              <div className='bg-card p-3 rounded border border-border'>
                <span className='font-medium'>User Activity Report</span>
                <span className='text-text-secondary ml-2'>Generating...</span>
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
    <div className='w-[500px] p-6'>
      <Tabs>
        <TabList>
          <Tab>🏠 Home</Tab>
          <Tab>👤 Profile</Tab>
          <Tab>⚙️ Settings</Tab>
          <Tab>📊 Analytics</Tab>
        </TabList>

        <TabPanel>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold text-text'>
              🏠 Home Dashboard
            </h2>
            <p className='text-text-secondary'>
              Your personalized home dashboard with quick access to everything
              you need.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold text-text'>👤 User Profile</h2>
            <p className='text-text-secondary'>
              Manage your profile information, preferences, and account
              settings.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold text-text'>⚙️ Settings</h2>
            <p className='text-text-secondary'>
              Configure application settings, notifications, and privacy
              preferences.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold text-text'>📊 Analytics</h2>
            <p className='text-text-secondary'>
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
    <div className='w-[700px] p-6'>
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
          <h2 className='text-lg font-semibold mb-2'>Overview</h2>
          <p className='text-text-secondary'>
            System overview and key metrics.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>Analytics</h2>
          <p className='text-text-secondary'>
            Detailed analytics and insights.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>Reports</h2>
          <p className='text-text-secondary'>Generate and view reports.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>Exports</h2>
          <p className='text-text-secondary'>Export data in various formats.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>API</h2>
          <p className='text-text-secondary'>API documentation and keys.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>Settings</h2>
          <p className='text-text-secondary'>Application configuration.</p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>Billing</h2>
          <p className='text-text-secondary'>
            Manage billing and subscriptions.
          </p>
        </TabPanel>
        <TabPanel>
          <h2 className='text-lg font-semibold mb-2'>Support</h2>
          <p className='text-text-secondary'>Get help and contact support.</p>
        </TabPanel>
      </Tabs>
    </div>
  )
};

export const Compact: Story = {
  render: () => (
    <div className='w-[400px] p-6'>
      <Tabs>
        <TabList>
          <Tab>Code</Tab>
          <Tab>Preview</Tab>
          <Tab>Console</Tab>
        </TabList>

        <TabPanel>
          <div className='bg-card p-4 rounded-lg border border-border'>
            <pre className='text-sm text-text-secondary'>
              <code>{`function hello() {
  console.log("Hello World!");
}`}</code>
            </pre>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='bg-card p-4 rounded-lg border border-border text-center'>
            <p className='text-text'>Preview Mode</p>
            <button className='mt-2 px-3 py-1 bg-primary text-white rounded text-sm'>
              Hello World!
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='bg-card p-4 rounded-lg border border-border'>
            <p className='text-sm text-text-secondary font-mono'>
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
