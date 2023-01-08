import React from 'react'

function navbar() {
  return (
    <div>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://www.regisjesuit.com/" class="flex items-center">
            <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/304042949_747567189980158_3603668779920286313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qtSOORBo3PUAX_mqYQb&_nc_ht=scontent-lga3-1.xx&oh=00_AfAL3ljOk2NuBosGBAnl8RRQNlH0nf8Uw-mlzcWSOA5S0g&oe=63C066BA" class="h-6 mr-3 sm:h-9" alt="RJ logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RJ Robotics</span>
        </a>
        <div class="flex items-center">
            <a href="https://www.google.com/maps/place/6300+S+Lewiston+Way,+Aurora,+CO+80016/@39.6011631,-104.8005882,17z/data=!3m1!4b1!4m5!3m4!1s0x876c88d4a3602fc3:0x4e5549fd92d581c!8m2!3d39.601159!4d-104.7983995" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">6300 S Lewiston Way, Aurora, CO 80016
</a>
            <a href="/Login" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-10 text-sm font-medium">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline"
                    //  aria-current="page" 
                     >Home</a>
                </li>
                <li>
                    <a href="/About" class="text-gray-900 dark:text-white hover:underline">About</a>
                </li>
                <li>
                    <a href="/Team" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="/Robots" class="text-gray-900 dark:text-white hover:underline">Robots</a>
                </li>
                <li>
                    <a href="https://www.firstinspires.org/robotics/frc" class="text-gray-900 dark:text-white hover:underline">FIRST</a>
                </li>
                <li>
                    <a href="/Scouter" class="text-gray-900 dark:text-white hover:underline">Scouter</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
  )
}

export default navbar