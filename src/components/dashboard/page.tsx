import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import { MainNav } from "./components/main-nav";
import { Overview } from "./components/overview";
import { RecentActive } from "./components/recently-active";
import { ReportAnIssue } from "./components/report";
import { UserNav } from "./components/user-nav";
import UserSwitcher from "./components/user-switcher";

export default function Dashboard() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <UserNav />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserSwitcher />
            <Link href="/report">Report</Link>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-light">Dashboard</h2>
          <div className="flex items-center space-y-2">
            <CalendarDateRangePicker />
            <Button className="bg-primary dark:bg-yellow-500">Download</Button>
          </div>
        </div>
        <Tabs defaultValue="Dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="Calendar">Calendar</TabsTrigger>
            <TabsTrigger value="Reports">Reports</TabsTrigger>
            <TabsTrigger value="Nootification">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="Dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">
                    Will put something here
                  </div>
                  <p className="text-sm text-muted-foreground">
                    will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recenty Active</CardTitle>
                  <CardDescription>employees recently active</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActive />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="Calendar" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">
                    Will put something here
                  </div>
                  <p className="text-sm text-muted-foreground">
                    will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="Reports" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">
                    Will put something here
                  </div>
                  <p className="text-sm text-muted-foreground">
                    will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold ">+1555</div>
                  <p className="text-sm text-muted-foreground">
                    Will put something here
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
