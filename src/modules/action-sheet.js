'use strict'

// Doc: https://github.com/zongjingyao/react-native-android-action-sheet
import { Platform, ActionSheetIOS, NativeModules } from 'react-native'
const AndroidActionSheet = NativeModules.AndroidActionSheet

const ActionSheet = Platform.OS === 'ios' ? ActionSheetIOS : AndroidActionSheet

export default ActionSheet
