import { useState } from '#app'

export const useRepositories = () => useState('repositories', () => [])
export const useBlockUI = () => useState('blockUI', () => false)
