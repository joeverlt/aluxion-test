import { useState } from '#app'

export const useRepositories = () => useState('repositories', () => [])
