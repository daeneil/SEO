import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActive() {
  return (
    <div className="space-y-8 h-80 overflow-y-auto">
      {Array.from({ length: 8 }).map((_, index) => (
        <>
          <div key={index} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$50</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$100</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$120.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <div className="ml-4 spacey-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
        </>
      ))}
    </div>
  );
}
