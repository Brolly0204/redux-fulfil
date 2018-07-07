import wrapWithAjaxData from './wrapWithAjaxData'
import wrapWithLoadData from './wrapWithLoadData'
import InputWithUserName from './InputWithUserName'


export default wrapWithLoadData(wrapWithAjaxData(InputWithUserName), 'username');