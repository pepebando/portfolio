<template>
<div class="w-full p-2 bg-greyspot bottom-0 flex items-center justify-between z-1">
    <div class="flex items-center space-x-4 " >
      <img src="https://placehold.in/300x200@2x.png/dark" alt="Cover" class="w-12 h-12 rounded" />
      <div>
        <p class="text-sm font-semibold">Misbehave</p>
        <p class="text-xs text-gray-400">Ship Wrek, Disco Lines</p>
      </div>
      <button class="text-gray-400 hover:text-white"><PlusIcon class="w-5 h-5" /></button>
    </div>
    <div class="flex flex-col w-1/3 items-center" >
      <div class="flex items-center space-x-4 mb-3 ">
        <button class="text-gray-400 hover:text-white"><ShuffleIcon class="w-5 h-5" /></button>
        <button class="text-gray-400 hover:text-white"><SkipBackIcon class="w-5 h-5" /></button>
        <button class="bg-white text-black p-2 rounded-full"><PlayIcon class="w-6 h-6" /></button>
        <button class="text-gray-400 hover:text-white"><SkipForwardIcon class="w-5 h-5" /></button>
        <button class="text-gray-400 hover:text-white"><RepeatIcon class="w-5 h-5" /></button>
      </div>
      <div class="flex items-center space-x-2 w-full">
        <span class="text-xs">0:06</span>
        <input type="range" class="w-full h-1 bg-gray-700 rounded-lg appearance-none" />
        <span class="text-xs">2:54</span>
      </div>
      
    </div>
    <div class="flex items-center space-x-4 " >
      <button class="text-gray-400 hover:text-white"><VolumeIcon class="w-5 h-5" /></button>
      <input type="range" class="w-20 h-1 bg-gray-700 rounded-lg appearance-none" />
      <button class="text-gray-400 hover:text-white"><FullscreenIcon class="w-5 h-5" /></button>
    </div>
  </div>
  </template>
  <script setup lang="ts">
 import { HomeIcon, SearchIcon, LibraryIcon, PlayIcon, SkipBackIcon, SkipForwardIcon, ShuffleIcon, RepeatIcon, VolumeIcon, FullscreenIcon, PlusIcon,MailIcon } from 'lucide-vue-next';
  </script>