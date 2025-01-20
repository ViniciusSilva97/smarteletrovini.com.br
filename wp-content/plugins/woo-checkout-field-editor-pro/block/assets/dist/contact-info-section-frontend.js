(()=>{"use strict";var e,o={82:(e,o,t)=>{const r=window.wc.blocksCheckout,a=window.wc.wcSettings,l=window.wp.i18n,s=window.wp.element,c=(0,s.forwardRef)((function({icon:e,size:o=24,...t},r){return(0,s.cloneElement)(e,{width:o,height:o,...t,ref:r})})),n=window.wp.primitives;var i=t(848);const d=(0,i.jsx)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)(n.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),p=window.wp.data;function u(e){var o,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(o=0;o<a;o++)e[o]&&(t=u(e[o]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const m=function(){for(var e,o,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(o=u(e))&&(r&&(r+=" "),r+=o);return r},h=window.wc.wcBlocksData,_=window.wc.blocksComponents,b=e=>{const{onChange:o,options:t,label:r,value:a="",className:n,size:u,errorId:b,required:w,errorMessage:f=(0,l.__)("Please select a valid option","woocommerce"),placeholder:v,...g}=e,k=(0,s.useCallback)((e=>{o(e.target.value)}),[o]),y=(0,s.useMemo)((()=>({value:"",label:null!=v?v:(0,l.sprintf)(
// translators: %s will be label of the field. For example "country/region".
// translators: %s will be label of the field. For example "country/region".
(0,l.__)("Select a %s","woocommerce"),r?.toLowerCase()),disabled:!!w})),[r,v,w]),x=(0,s.useId)(),j=g.id||`wc-blocks-components-select-${x}`,C=b||j,E=(0,s.useMemo)((()=>w&&a?t:[y].concat(t)),[w,a,y,t]),{setValidationErrors:N,clearValidationError:O}=(0,p.useDispatch)(h.VALIDATION_STORE_KEY),{error:I,validationErrorId:$}=(0,p.useSelect)((e=>{const o=e(h.VALIDATION_STORE_KEY);return{error:o.getValidationError(C),validationErrorId:o.getValidationErrorId(C)}}));(0,s.useEffect)((()=>(!w||a?O(C):N({[C]:{message:f,hidden:!0}}),()=>{O(C)})),[O,a,C,f,w,N]);const A=(0,p.useSelect)((e=>e(h.VALIDATION_STORE_KEY).getValidationError(C||"")||{hidden:!0}));return(0,i.jsxs)("div",{className:m(n,{"has-error":!A.hidden}),children:[(0,i.jsx)("div",{className:"wc-blocks-components-select",children:(0,i.jsxs)("div",{className:"wc-blocks-components-select__container",children:[(0,i.jsx)("label",{htmlFor:j,className:"wc-blocks-components-select__label",children:r}),(0,i.jsx)("select",{className:"wc-blocks-components-select__select",id:j,size:void 0!==u?u:1,onChange:k,value:a,"aria-invalid":!(!I?.message||I?.hidden),"aria-errormessage":$,...g,children:E.map((e=>(0,i.jsx)("option",{value:e.value,"data-alternate-values":`[${e.label}]`,disabled:void 0!==e.disabled&&e.disabled,children:e.label},e.value)))},j),(0,i.jsx)(c,{className:"wc-blocks-components-select__expand",icon:d})]})}),(0,i.jsx)(_.ValidationInputError,{propertyName:C})]})};var w=t(609);const f=window.wp.compose,v=({label:e,secondaryLabel:o,description:t,secondaryDescription:r,id:a})=>(0,i.jsxs)("div",{className:"wc-block-components-radio-control__option-layout",children:[(0,i.jsxs)("div",{className:"wc-block-components-radio-control__label-group",children:[e&&(0,i.jsx)("span",{id:a&&`${a}__label`,className:"wc-block-components-radio-control__label",children:e}),o&&(0,i.jsx)("span",{id:a&&`${a}__secondary-label`,className:"wc-block-components-radio-control__secondary-label",children:o})]}),(t||r)&&(0,i.jsxs)("div",{className:"wc-block-components-radio-control__description-group",children:[t&&(0,i.jsx)("span",{id:a&&`${a}__description`,className:"wc-block-components-radio-control__description",children:t}),r&&(0,i.jsx)("span",{id:a&&`${a}__secondary-description`,className:"wc-block-components-radio-control__secondary-description",children:r})]})]}),g=({checked:e,name:o,onChange:t,option:r,disabled:a=!1,highlightChecked:l=!1})=>{const{value:s,label:c,description:n,secondaryLabel:d,secondaryDescription:p}=r;return(0,i.jsxs)("label",{className:m("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":e,"wc-block-components-radio-control__option--checked-option-highlighted":e&&l}),htmlFor:`${o}-${s}`,children:[(0,i.jsx)("input",{id:`${o}-${s}`,className:"wc-block-components-radio-control__input",type:"radio",name:o,value:s,onChange:e=>t(e.target.value),checked:e,"aria-describedby":m({[`${o}-${s}__label`]:c,[`${o}-${s}__secondary-label`]:d,[`${o}-${s}__description`]:n,[`${o}-${s}__secondary-description`]:p}),"aria-disabled":a,onKeyDown:e=>{a&&["ArrowUp","ArrowDown","AllowLeft","ArrowRight"].includes(e.key)&&e.preventDefault()}}),(0,i.jsx)(v,{id:`${o}-${s}`,label:c,secondaryLabel:d,description:n,secondaryDescription:p})]})},k=({className:e="",id:o,selected:t="",onChange:r,options:a=[],disabled:s=!1,highlightChecked:c=!1,title:n="",required:d=!1,errorMessage:u=(0,l.__)("Please select an option","woocommerce"),errorId:b})=>{const v=(0,f.useInstanceId)(k),y=o||v,x=b||y,{setValidationErrors:j,clearValidationError:C}=(0,p.useDispatch)(h.VALIDATION_STORE_KEY),E=(0,p.useSelect)((e=>e(h.VALIDATION_STORE_KEY).getValidationError(x)||{hidden:!0}));(0,w.useEffect)((()=>(!d||t?C(x):j({[x]:{message:u,hidden:!0}}),()=>{C(x)})),[t,d,x,u]);const N=(0,w.useMemo)((()=>a.findIndex((e=>e.value===t))),[a,t]);return a.length?(0,i.jsxs)("div",{className:m("wc-block-components-radio-control thwcfe-radio-control",{"has-error":!E.hidden,"wc-block-components-radio-control--highlight-checked--first-selected":c&&0===N,"wc-block-components-radio-control--highlight-checked--last-selected":c&&N===a.length-1,"wc-block-components-radio-control--highlight-checked":c},e),children:[(0,i.jsxs)("div",{className:"wc-block-components-cfe-radio-control__heading",children:[" ",n||""," "]}),a.map((e=>(0,i.jsx)(g,{highlightChecked:c,name:`radio-control-${y}`,checked:e.value===t,option:e,onChange:o=>{r(o),"function"==typeof e.onChange&&e.onChange(o)},disabled:s},`${y}-${e.value}`))),(0,i.jsx)(_.ValidationInputError,{propertyName:x})]}):null},y=k,x=e=>{const{errorId:o,errorMessage:t,autoCapitalize:r,autoComplete:a,placeholder:l,...s}=e;return s},j=window.wp.url,C=({field:e,onChange:o=""})=>{const{id:t,label:r,type:a,value:s,placeholder:c,required:n,options:d,title:p,validate:u,property_set:h,enabled:f,cssclass:v}=e,{default:g,checked:k}=h,C=(e=>({id:`section_one-${e?.id}`.replaceAll("/","-"),errorId:`section_${e?.id}`,label:e?.title,autoCapitalize:e?.autocapitalize,autoComplete:e?.autocomplete,errorMessage:e?.errorMessage,required:e?.required,placeholder:e?.placeholder,className:`wc-block-components-address-form__${e?.id}`.replaceAll("/","-"),options:e?.options?Object.values(e.options).map((e=>({value:e.key,label:e.text}))):[],...e?.attributes}))(e),E=(0,w.useRef)({});if(!f||"0"===f)return null;const N=e=>{o({[t]:e})};return(0,w.useEffect)((()=>{void 0!==g&&N(g)}),[g]),"checkbox"===a&&(0,w.useEffect)((()=>{void 0!==k&&N(k)}),[k]),"email"!==e.type?"checkbox"===a?(0,i.jsx)(_.CheckboxControl,{checked:s,onChange:N,...x(C),className:m(v?.split(",").map((e=>e.trim()))),required:n},t):"select"===a&&e.options?(0,i.jsx)(b,{...C,label:p||"",className:m(v?.split(",").map((e=>e.trim())),"wc-block-components-select-input",`wc-block-components-select-input-${t}`.replaceAll("/","-")),value:s,onChange:N,options:C.options,required:n,errorMessage:C.errorMessage||void 0,placeholder:c||null},t):"radio"===a?(0,i.jsx)(y,{...C,selected:s,onChange:N,options:C.options,disabled:!1,highlightChecked:!0,title:p||"",className:m(v?.split(",").map((e=>e.trim())))}):(0,i.jsx)(_.ValidatedTextInput,{ref:e=>E.current[t]=e,...C,type:a,value:s,onChange:N,className:m(v?.split(",").map((e=>e.trim()))),customFormatter:o=>"postcode"===e.type?o.trimStart().toUpperCase():o,customValidation:e=>((e,o)=>!((e.required||e.value)&&("phone"!==o||(0,j.isPhoneNumber)(e.value)?"url"!==o||(0,j.isURL)(e.value)?"email"===o&&!(0,j.isEmail)(e.value)&&(e.setCustomValidity((0,l.__)("Please enter a valid email address","woocommerce")),1):(e.setCustomValidity((0,l.__)("Please enter a valid URL","woocommerce")),1):(e.setCustomValidity((0,l.__)("Please enter a valid Phone Number","woocommerce")),1))))(e,u)},t):void 0},E=window.lodash,N=(0,a.getSetting)("thwcfe-block-integration_data",""),{allSections:O}=N,{contact:I}=O,$=JSON.parse('{"apiVersion":2,"name":"woocommerce-checkout-field-editor-pro/contact-information-section","version":"2.0.0","title":"Contact Information Section","category":"woocommerce","description":"Adds fields.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-contact-information-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}},"text":{"type":"string","default":""},"title":{"type":"string","default":"Contact Information"},"description":{"type":"string","default":"contact Fields"}},"textdomain":"woocommerce-checkout-field-editor-pro","editorStyle":"file:../../../build/style-checkout-section-block.css"}');(0,r.registerCheckoutBlock)({metadata:$,component:({checkoutExtensionData:e,extensions:o})=>{const{setExtensionData:t}=e,[r,a]=(0,w.useState)({}),l=(0,w.useCallback)((0,E.debounce)((e=>{t("thwcfe-additional-fields","contact",e)}),1e3),[t]);(0,w.useEffect)((()=>(Object.keys(r).length>0&&l(r),()=>{l.cancel()})),[r,l]);const s=(0,w.useCallback)((e=>{a((o=>({...o,...e})))}),[]),c=Array.isArray(I.fields)?I.fields:Object.values(I.fields);return(0,i.jsx)("div",{children:c.map((e=>(0,i.jsx)("div",{className:"wc-block-checkout__additional-fields__field",children:(0,i.jsx)(C,{field:{...e,value:r[e.id]||""},onChange:s})},e.id)))})}})},20:(e,o,t)=>{var r=t(609),a=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function n(e,o,t){var r,n={},i=null,d=null;for(r in void 0!==t&&(i=""+t),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(d=o.ref),o)l.call(o,r)&&!c.hasOwnProperty(r)&&(n[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===n[r]&&(n[r]=o[r]);return{$$typeof:a,type:e,key:i,ref:d,props:n,_owner:s.current}}o.jsx=n,o.jsxs=n},848:(e,o,t)=>{e.exports=t(20)},609:e=>{e.exports=window.React}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var l=t[e]={exports:{}};return o[e](l,l.exports,r),l.exports}r.m=o,e=[],r.O=(o,t,a,l)=>{if(!t){var s=1/0;for(d=0;d<e.length;d++){for(var[t,a,l]=e[d],c=!0,n=0;n<t.length;n++)(!1&l||s>=l)&&Object.keys(r.O).every((e=>r.O[e](t[n])))?t.splice(n--,1):(c=!1,l<s&&(s=l));if(c){e.splice(d--,1);var i=a();void 0!==i&&(o=i)}}return o}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,a,l]},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={213:0,185:0,294:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var a,l,[s,c,n]=t,i=0;if(s.some((o=>0!==e[o]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(n)var d=n(r)}for(o&&o(t);i<s.length;i++)l=s[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},t=globalThis.webpackChunkwoo_checkout_field_editor_pro=globalThis.webpackChunkwoo_checkout_field_editor_pro||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=r.O(void 0,[185,294],(()=>r(82)));a=r.O(a)})();