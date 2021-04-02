import { resolve } from 'path'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json';
import RollupTypescript from 'rollup-plugin-typescript2'

// const resolveFile = path => NodePath.resolve(__dirname, '..', path)

export default {
  input: 'src/index.ts',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    json(),
    RollupTypescript(),
    // RollupTypescript({
    //   tsconfig: resolve(__dirname, 'tsconfig.rollup.json')
    // }),
    commonjs()
    // RollupTypescript({
    //   tsconfig: resolveFile
    // })
  ]
}