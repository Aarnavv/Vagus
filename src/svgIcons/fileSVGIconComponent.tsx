import React from 'react';
import '../css/navbar.css';

export function TSXIcon(props :React.SVGProps<SVGSVGElement>){
    return (
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2"/>
            <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25"/>
            <path d="M0.70515 10.8601C0.70515 10.8091 0.71715 10.7631 0.74115 10.7221C0.76515 10.6801 0.79765 10.6471 0.83865 10.6231C0.88065 10.5991 0.92715 10.5871 0.97815 10.5871C1.03115 10.5871 1.07865 10.5991 1.12065 10.6231C1.16265 10.6471 1.19565 10.6801 1.21965 10.7221C1.24365 10.7631 1.25565 10.8091 1.25565 10.8601C1.25565 10.9111 1.24365 10.9581 1.21965 11.0011C1.19565 11.0431 1.16265 11.0761 1.12065 11.1001C1.07865 11.1251 1.03115 11.1376 0.97815 11.1376C0.92715 11.1376 0.88065 11.1251 0.83865 11.1001C0.79765 11.0761 0.76515 11.0431 0.74115 11.0011C0.71715 10.9581 0.70515 10.9111 0.70515 10.8601ZM3.45048 11.0191C3.39448 11.0551 3.32698 11.0836 3.24798 11.1046C3.16898 11.1266 3.08998 11.1376 3.01098 11.1376C2.83498 11.1376 2.69998 11.0916 2.60598 10.9996C2.51298 10.9076 2.46648 10.7881 2.46648 10.6411V9.7351H2.10798V9.5191H2.46648V9.1621L2.75448 9.1276V9.5191H3.29448L3.26148 9.7351H2.75448V10.6381C2.75448 10.7251 2.77648 10.7906 2.82048 10.8346C2.86548 10.8786 2.93998 10.9006 3.04398 10.9006C3.10298 10.9006 3.15698 10.8936 3.20598 10.8796C3.25498 10.8656 3.30048 10.8476 3.34248 10.8256L3.45048 11.0191ZM4.51881 10.9081C4.63381 10.9081 4.72431 10.8871 4.79031 10.8451C4.85731 10.8031 4.89081 10.7461 4.89081 10.6741C4.89081 10.6281 4.88181 10.5886 4.86381 10.5556C4.84681 10.5226 4.81081 10.4926 4.75581 10.4656C4.70181 10.4386 4.61981 10.4111 4.50981 10.3831C4.40281 10.3561 4.30931 10.3246 4.22931 10.2886C4.14931 10.2526 4.08731 10.2056 4.04331 10.1476C4.00031 10.0896 3.97881 10.0146 3.97881 9.9226C3.97881 9.8326 4.00381 9.7546 4.05381 9.6886C4.10481 9.6226 4.17631 9.5716 4.26831 9.5356C4.36131 9.4996 4.46931 9.4816 4.59231 9.4816C4.72231 9.4816 4.83531 9.4991 4.93131 9.5341C5.02831 9.5681 5.11031 9.6101 5.17731 9.6601L5.05431 9.8476C4.99331 9.8066 4.92631 9.7731 4.85331 9.7471C4.78131 9.7211 4.69631 9.7081 4.59831 9.7081C4.48131 9.7081 4.39781 9.7261 4.34781 9.7621C4.29881 9.7971 4.27431 9.8436 4.27431 9.9016C4.27431 9.9446 4.28631 9.9806 4.31031 10.0096C4.33531 10.0376 4.37781 10.0636 4.43781 10.0876C4.49781 10.1116 4.58081 10.1381 4.68681 10.1671C4.78981 10.1951 4.87981 10.2281 4.95681 10.2661C5.03381 10.3041 5.09331 10.3541 5.13531 10.4161C5.17831 10.4771 5.19981 10.5576 5.19981 10.6576C5.19981 10.7706 5.16731 10.8626 5.10231 10.9336C5.03731 11.0036 4.95281 11.0551 4.84881 11.0881C4.74581 11.1211 4.63581 11.1376 4.51881 11.1376C4.37481 11.1376 4.25081 11.1166 4.14681 11.0746C4.04381 11.0326 3.95731 10.9811 3.88731 10.9201L4.04631 10.7371C4.10831 10.7881 4.17931 10.8296 4.25931 10.8616C4.33931 10.8926 4.42581 10.9081 4.51881 10.9081ZM5.95163 11.1001H5.62763L6.20513 10.2661L5.69663 9.5191H6.03263L6.38063 10.0936L6.73163 9.5191H7.05413L6.55013 10.2541L7.12763 11.1001H6.78113L6.36863 10.4356L5.95163 11.1001Z" fill="white"/>
        </svg>

    )
}

export function IOIcon(props :React.SVGProps<SVGSVGElement>){
    return (
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2"/>
            <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25"/>
            <path d="M0.70515 10.8601C0.70515 10.8091 0.71715 10.7631 0.74115 10.7221C0.76515 10.6801 0.79765 10.6471 0.83865 10.6231C0.88065 10.5991 0.92715 10.5871 0.97815 10.5871C1.03115 10.5871 1.07865 10.5991 1.12065 10.6231C1.16265 10.6471 1.19565 10.6801 1.21965 10.7221C1.24365 10.7631 1.25565 10.8091 1.25565 10.8601C1.25565 10.9111 1.24365 10.9581 1.21965 11.0011C1.19565 11.0431 1.16265 11.0761 1.12065 11.1001C1.07865 11.1251 1.03115 11.1376 0.97815 11.1376C0.92715 11.1376 0.88065 11.1251 0.83865 11.1001C0.79765 11.0761 0.76515 11.0431 0.74115 11.0011C0.71715 10.9581 0.70515 10.9111 0.70515 10.8601ZM2.99448 9.5191V10.8811H3.43398V11.1001H2.22498V10.8811H2.70648V9.7381H2.23998V9.5191H2.99448ZM2.77998 8.7631C2.83998 8.7631 2.88798 8.7816 2.92398 8.8186C2.96098 8.8556 2.97948 8.9006 2.97948 8.9536C2.97948 9.0086 2.96098 9.0551 2.92398 9.0931C2.88798 9.1301 2.83998 9.1486 2.77998 9.1486C2.72098 9.1486 2.67298 9.1301 2.63598 9.0931C2.59998 9.0551 2.58198 9.0086 2.58198 8.9536C2.58198 8.9006 2.59998 8.8556 2.63598 8.8186C2.67298 8.7816 2.72098 8.7631 2.77998 8.7631ZM4.58181 9.4816C4.73281 9.4816 4.85931 9.5156 4.96131 9.5836C5.06431 9.6516 5.14181 9.7476 5.19381 9.8716C5.24681 9.9946 5.27331 10.1401 5.27331 10.3081C5.27331 10.4711 5.24631 10.6151 5.19231 10.7401C5.13931 10.8641 5.06131 10.9616 4.95831 11.0326C4.85531 11.1026 4.72881 11.1376 4.57881 11.1376C4.42881 11.1376 4.30181 11.1036 4.19781 11.0356C4.09481 10.9676 4.01681 10.8716 3.96381 10.7476C3.91081 10.6236 3.88431 10.4781 3.88431 10.3111C3.88431 10.1471 3.91081 10.0031 3.96381 9.8791C4.01781 9.7541 4.09681 9.6566 4.20081 9.5866C4.30481 9.5166 4.43181 9.4816 4.58181 9.4816ZM4.58181 9.7111C4.45181 9.7111 4.35381 9.7601 4.28781 9.8581C4.22181 9.9551 4.18881 10.1061 4.18881 10.3111C4.18881 10.5141 4.22131 10.6646 4.28631 10.7626C4.35131 10.8596 4.44881 10.9081 4.57881 10.9081C4.70881 10.9081 4.80631 10.8596 4.87131 10.7626C4.93631 10.6646 4.96881 10.5131 4.96881 10.3081C4.96881 10.1041 4.93631 9.9536 4.87131 9.8566C4.80731 9.7596 4.71081 9.7111 4.58181 9.7111Z" fill="white"/>
        </svg>

    )
}

export function BATIcon(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2"/>
            <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25"/>
            <path d="M0.70515 10.86C0.70515 10.809 0.71715 10.763 0.74115 10.722C0.76515 10.68 0.79765 10.647 0.83865 10.623C0.88065 10.599 0.92715 10.587 0.97815 10.587C1.03115 10.587 1.07865 10.599 1.12065 10.623C1.16265 10.647 1.19565 10.68 1.21965 10.722C1.24365 10.763 1.25565 10.809 1.25565 10.86C1.25565 10.911 1.24365 10.958 1.21965 11.001C1.19565 11.043 1.16265 11.076 1.12065 11.1C1.07865 11.125 1.03115 11.1375 0.97815 11.1375C0.92715 11.1375 0.88065 11.125 0.83865 11.1C0.79765 11.076 0.76515 11.043 0.74115 11.001C0.71715 10.958 0.70515 10.911 0.70515 10.86ZM2.45448 9.71698C2.51048 9.64298 2.57598 9.58548 2.65098 9.54448C2.72698 9.50248 2.80948 9.48148 2.89848 9.48148C3.03848 9.48148 3.15198 9.51598 3.23898 9.58498C3.32598 9.65298 3.38948 9.74898 3.42948 9.87298C3.46948 9.99598 3.48948 10.141 3.48948 10.308C3.48948 10.468 3.46548 10.6105 3.41748 10.7355C3.36948 10.8605 3.29898 10.959 3.20598 11.031C3.11298 11.102 2.99848 11.1375 2.86248 11.1375C2.68148 11.1375 2.53998 11.0715 2.43798 10.9395L2.41998 11.1H2.16648V8.88298L2.45448 8.84848V9.71698ZM2.79198 10.911C2.91598 10.911 3.01148 10.862 3.07848 10.764C3.14648 10.665 3.18048 10.513 3.18048 10.308C3.18048 10.171 3.16698 10.0585 3.13998 9.97048C3.11298 9.88148 3.07298 9.81548 3.01998 9.77248C2.96798 9.72948 2.90398 9.70798 2.82798 9.70798C2.74598 9.70798 2.67348 9.73298 2.61048 9.78298C2.54748 9.83198 2.49548 9.88798 2.45448 9.95098V10.716C2.49448 10.776 2.54348 10.8235 2.60148 10.8585C2.65948 10.8935 2.72298 10.911 2.79198 10.911ZM5.13081 10.737C5.13081 10.8 5.14081 10.846 5.16081 10.875C5.18081 10.903 5.21231 10.924 5.25531 10.938L5.18781 11.136C5.11581 11.127 5.05331 11.1055 5.00031 11.0715C4.94731 11.0375 4.90781 10.9855 4.88181 10.9155C4.82481 10.9885 4.75281 11.044 4.66581 11.082C4.57881 11.119 4.48431 11.1375 4.38231 11.1375C4.22331 11.1375 4.09781 11.0925 4.00581 11.0025C3.91381 10.9125 3.86781 10.794 3.86781 10.647C3.86781 10.482 3.93181 10.3555 4.05981 10.2675C4.18881 10.1795 4.37381 10.1355 4.61481 10.1355H4.84431V10.0155C4.84431 9.90648 4.81181 9.82898 4.74681 9.78298C4.68281 9.73698 4.59331 9.71398 4.47831 9.71398C4.42631 9.71398 4.36431 9.72048 4.29231 9.73348C4.22031 9.74648 4.14381 9.76698 4.06281 9.79498L3.98931 9.58498C4.08731 9.54798 4.18081 9.52148 4.26981 9.50548C4.35981 9.48948 4.44381 9.48148 4.52181 9.48148C4.72581 9.48148 4.87831 9.52798 4.97931 9.62098C5.08031 9.71298 5.13081 9.83948 5.13081 10.0005V10.737ZM4.46331 10.9215C4.53731 10.9215 4.60831 10.9025 4.67631 10.8645C4.74431 10.8265 4.80031 10.7735 4.84431 10.7055V10.323H4.63431C4.46731 10.323 4.34881 10.3515 4.27881 10.4085C4.20881 10.4645 4.17381 10.5415 4.17381 10.6395C4.17381 10.7315 4.19781 10.8015 4.24581 10.8495C4.29381 10.8975 4.36631 10.9215 4.46331 10.9215ZM7.04813 11.019C6.99213 11.055 6.92463 11.0835 6.84563 11.1045C6.76663 11.1265 6.68763 11.1375 6.60863 11.1375C6.43263 11.1375 6.29763 11.0915 6.20363 10.9995C6.11063 10.9075 6.06413 10.788 6.06413 10.641V9.73498H5.70563V9.51898H6.06413V9.16198L6.35213 9.12748V9.51898H6.89213L6.85913 9.73498H6.35213V10.638C6.35213 10.725 6.37413 10.7905 6.41813 10.8345C6.46313 10.8785 6.53763 10.9005 6.64163 10.9005C6.70063 10.9005 6.75463 10.8935 6.80363 10.8795C6.85263 10.8655 6.89813 10.8475 6.94013 10.8255L7.04813 11.019Z" fill="white"/>
        </svg>


    )
}

export function SYSIcon(props:React.SVGProps<SVGSVGElement>){
    return (
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2"/>
            <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25"/>
            <path d="M0.70515 10.86C0.70515 10.809 0.71715 10.763 0.74115 10.722C0.76515 10.68 0.79765 10.647 0.83865 10.623C0.88065 10.599 0.92715 10.587 0.97815 10.587C1.03115 10.587 1.07865 10.599 1.12065 10.623C1.16265 10.647 1.19565 10.68 1.21965 10.722C1.24365 10.763 1.25565 10.809 1.25565 10.86C1.25565 10.911 1.24365 10.958 1.21965 11.001C1.19565 11.043 1.16265 11.076 1.12065 11.1C1.07865 11.125 1.03115 11.1375 0.97815 11.1375C0.92715 11.1375 0.88065 11.125 0.83865 11.1C0.79765 11.076 0.76515 11.043 0.74115 11.001C0.71715 10.958 0.70515 10.911 0.70515 10.86ZM2.71998 10.908C2.83498 10.908 2.92548 10.887 2.99148 10.845C3.05848 10.803 3.09198 10.746 3.09198 10.674C3.09198 10.628 3.08298 10.5885 3.06498 10.5555C3.04798 10.5225 3.01198 10.4925 2.95698 10.4655C2.90298 10.4385 2.82098 10.411 2.71098 10.383C2.60398 10.356 2.51048 10.3245 2.43048 10.2885C2.35048 10.2525 2.28848 10.2055 2.24448 10.1475C2.20148 10.0895 2.17998 10.0145 2.17998 9.92248C2.17998 9.83248 2.20498 9.75448 2.25498 9.68848C2.30598 9.62248 2.37748 9.57148 2.46948 9.53548C2.56248 9.49948 2.67048 9.48148 2.79348 9.48148C2.92348 9.48148 3.03648 9.49898 3.13248 9.53398C3.22948 9.56798 3.31148 9.60998 3.37848 9.65998L3.25548 9.84748C3.19448 9.80648 3.12748 9.77298 3.05448 9.74698C2.98248 9.72098 2.89748 9.70798 2.79948 9.70798C2.68248 9.70798 2.59898 9.72598 2.54898 9.76198C2.49998 9.79698 2.47548 9.84348 2.47548 9.90148C2.47548 9.94448 2.48748 9.98048 2.51148 10.0095C2.53648 10.0375 2.57898 10.0635 2.63898 10.0875C2.69898 10.1115 2.78198 10.138 2.88798 10.167C2.99098 10.195 3.08098 10.228 3.15798 10.266C3.23498 10.304 3.29448 10.354 3.33648 10.416C3.37948 10.477 3.40098 10.5575 3.40098 10.6575C3.40098 10.7705 3.36848 10.8625 3.30348 10.9335C3.23848 11.0035 3.15398 11.055 3.04998 11.088C2.94698 11.121 2.83698 11.1375 2.71998 11.1375C2.57598 11.1375 2.45198 11.1165 2.34798 11.0745C2.24498 11.0325 2.15848 10.981 2.08848 10.92L2.24748 10.737C2.30948 10.788 2.38048 10.8295 2.46048 10.8615C2.54048 10.8925 2.62698 10.908 2.71998 10.908ZM5.31081 9.51898L4.75881 11.109C4.72081 11.221 4.67181 11.322 4.61181 11.412C4.55181 11.502 4.47431 11.5755 4.37931 11.6325C4.28531 11.6905 4.16681 11.7265 4.02381 11.7405L3.98331 11.517C4.09131 11.5 4.17681 11.474 4.23981 11.439C4.30381 11.404 4.35381 11.3585 4.38981 11.3025C4.42681 11.2465 4.45981 11.179 4.48881 11.1H4.39131L3.84681 9.51898H4.15431L4.58481 10.89L5.01381 9.51898H5.31081ZM6.31763 10.908C6.43263 10.908 6.52313 10.887 6.58913 10.845C6.65613 10.803 6.68963 10.746 6.68963 10.674C6.68963 10.628 6.68063 10.5885 6.66263 10.5555C6.64563 10.5225 6.60963 10.4925 6.55463 10.4655C6.50063 10.4385 6.41863 10.411 6.30863 10.383C6.20163 10.356 6.10813 10.3245 6.02813 10.2885C5.94813 10.2525 5.88613 10.2055 5.84213 10.1475C5.79913 10.0895 5.77763 10.0145 5.77763 9.92248C5.77763 9.83248 5.80263 9.75448 5.85263 9.68848C5.90363 9.62248 5.97513 9.57148 6.06713 9.53548C6.16013 9.49948 6.26813 9.48148 6.39113 9.48148C6.52113 9.48148 6.63413 9.49898 6.73013 9.53398C6.82713 9.56798 6.90913 9.60998 6.97613 9.65998L6.85313 9.84748C6.79213 9.80648 6.72513 9.77298 6.65213 9.74698C6.58013 9.72098 6.49513 9.70798 6.39713 9.70798C6.28013 9.70798 6.19663 9.72598 6.14663 9.76198C6.09763 9.79698 6.07313 9.84348 6.07313 9.90148C6.07313 9.94448 6.08513 9.98048 6.10913 10.0095C6.13413 10.0375 6.17663 10.0635 6.23663 10.0875C6.29663 10.1115 6.37963 10.138 6.48563 10.167C6.58863 10.195 6.67863 10.228 6.75563 10.266C6.83263 10.304 6.89213 10.354 6.93413 10.416C6.97713 10.477 6.99863 10.5575 6.99863 10.6575C6.99863 10.7705 6.96613 10.8625 6.90113 10.9335C6.83613 11.0035 6.75163 11.055 6.64763 11.088C6.54463 11.121 6.43463 11.1375 6.31763 11.1375C6.17363 11.1375 6.04963 11.1165 5.94563 11.0745C5.84263 11.0325 5.75613 10.981 5.68613 10.92L5.84513 10.737C5.90713 10.788 5.97813 10.8295 6.05813 10.8615C6.13813 10.8925 6.22463 10.908 6.31763 10.908Z" fill="white"/>
        </svg>

    )
}

export function MDIcon(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.44482 0C0.778131 0 0.238719 0.585 0.238719 1.3L0.232658 11.7C0.232658 12.415 0.77207 13 1.43876 13H8.71779C9.38448 13 9.92996 12.415 9.92996 11.7V3.9L6.29347 0H1.44482ZM5.68739 4.55V0.975L9.02083 4.55H5.68739Z" fill="#A2A2A2"/>
            <rect width="10.1697" height="2.54223" transform="matrix(0.999978 -0.00656593 0.00564626 0.999984 0 9.12524)" fill="#9D2B25"/>
            <path d="M0.705146 10.86C0.705146 10.809 0.717146 10.763 0.741146 10.722C0.765146 10.68 0.797646 10.647 0.838646 10.623C0.880646 10.599 0.927146 10.587 0.978146 10.587C1.03115 10.587 1.07865 10.599 1.12065 10.623C1.16265 10.647 1.19565 10.68 1.21965 10.722C1.24365 10.763 1.25565 10.809 1.25565 10.86C1.25565 10.911 1.24365 10.958 1.21965 11.001C1.19565 11.043 1.16265 11.076 1.12065 11.1C1.07865 11.125 1.03115 11.1375 0.978146 11.1375C0.927146 11.1375 0.880646 11.125 0.838646 11.1C0.797646 11.076 0.765146 11.043 0.741146 11.001C0.717146 10.958 0.705146 10.911 0.705146 10.86ZM3.22997 9.48148C3.28497 9.48148 3.33597 9.49348 3.38297 9.51748C3.42997 9.54148 3.46797 9.58548 3.49697 9.64948C3.52597 9.71248 3.54047 9.80398 3.54047 9.92398V11.1H3.27797V9.96598C3.27797 9.87398 3.27197 9.80798 3.25997 9.76798C3.24897 9.72698 3.21697 9.70648 3.16397 9.70648C3.11997 9.70648 3.07647 9.71998 3.03347 9.74698C2.99047 9.77398 2.94797 9.81898 2.90597 9.88198V11.1H2.65397V9.96598C2.65397 9.87398 2.64797 9.80798 2.63597 9.76798C2.62497 9.72698 2.59297 9.70648 2.53997 9.70648C2.49497 9.70648 2.45097 9.71998 2.40797 9.74698C2.36597 9.77398 2.32397 9.81898 2.28197 9.88198V11.1H2.01947V9.51898H2.24147L2.25947 9.69598C2.30347 9.63398 2.35197 9.58298 2.40497 9.54298C2.45897 9.50198 2.52447 9.48148 2.60147 9.48148C2.66147 9.48148 2.71697 9.49598 2.76797 9.52498C2.81997 9.55398 2.85797 9.60798 2.88197 9.68698C2.92497 9.62598 2.97397 9.57648 3.02897 9.53848C3.08397 9.50048 3.15097 9.48148 3.22997 9.48148ZM4.9043 8.84848L5.1923 8.88298V11.1H4.9388L4.9148 10.8975C4.8588 10.9775 4.7928 11.0375 4.7168 11.0775C4.6408 11.1175 4.5578 11.1375 4.4678 11.1375C4.3318 11.1375 4.2193 11.103 4.1303 11.034C4.0423 10.964 3.9768 10.867 3.9338 10.743C3.8908 10.619 3.8693 10.475 3.8693 10.311C3.8693 10.151 3.8938 10.009 3.9428 9.88498C3.9928 9.75998 4.0638 9.66148 4.1558 9.58948C4.2488 9.51748 4.3608 9.48148 4.4918 9.48148C4.5788 9.48148 4.6563 9.49698 4.7243 9.52798C4.7923 9.55798 4.8523 9.60248 4.9043 9.66148V8.84848ZM4.5668 9.70798C4.4438 9.70798 4.3483 9.75748 4.2803 9.85648C4.2123 9.95548 4.1783 10.107 4.1783 10.311C4.1783 10.446 4.1923 10.558 4.2203 10.647C4.2483 10.736 4.2888 10.802 4.3418 10.845C4.3948 10.888 4.4598 10.9095 4.5368 10.9095C4.6198 10.9095 4.6913 10.8855 4.7513 10.8375C4.8123 10.7895 4.8633 10.734 4.9043 10.671V9.89848C4.8633 9.83848 4.8138 9.79198 4.7558 9.75898C4.6988 9.72498 4.6358 9.70798 4.5668 9.70798Z" fill="white"/>
        </svg>

    )
}

export function BOMBNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path d="M13.6666 4.42857C13.6666 5.21754 12.7777 0.71427 10.0952 0.71427C7.41269 0.71427 5.38094 3.6461 5.38094 2.85712C5.38094 2.06815 7.41269 0 10.0952 0C12.7777 0 13.6666 3.63959 13.6666 4.42857Z" fill="#120505"/>
            <circle cx="6.52383" cy="6.57139" r="5.42857" fill="#FF0000"/>
            <rect x="6.52003" width="4.28571" height="2.85714" transform="rotate(23.4956 6.52003 0)" fill="#FF0000"/>
            <path d="M13.5238 2.57147L13.7291 3.57887L14.5339 2.93912L14.0436 3.84278L15.0714 3.87002L14.1149 4.24713L14.8847 4.92861L13.9096 4.6027L14.0613 5.61956L13.5238 4.74313L12.9863 5.61956L13.138 4.6027L12.1629 4.92861L12.9327 4.24713L11.9763 3.87002L13.004 3.84278L12.5137 2.93912L13.3185 3.57887L13.5238 2.57147Z" fill="#FFE600"/>
            <path d="M13.5238 3.42853L13.6171 3.88643L13.9829 3.59564L13.7601 4.0064L14.2272 4.01878L13.7925 4.19019L14.1424 4.49996L13.6992 4.35181L13.7681 4.81402L13.5238 4.41565L13.2795 4.81402L13.3484 4.35181L12.9052 4.49996L13.2551 4.19019L12.8204 4.01878L13.2875 4.0064L13.0647 3.59564L13.4305 3.88643L13.5238 3.42853Z" fill="#FFA500"/>
            <path d="M4.58359 3.82254C2.94373 4.76931 2.01424 5.94367 1.7381 5.46538C1.46196 4.98709 2.2626 3.01812 3.90246 2.07135C5.54231 1.12458 6.30096 1.36851 6.5771 1.8468C6.85325 2.32509 6.22345 2.87577 4.58359 3.82254Z" fill="white"/>
            <path d="M6.69382 0.28578L7.21785 0.513636L6.66667 1.57149L6.2381 1.28579L6.69382 0.28578Z" fill="white"/>
        </svg>
    )
}

export function SHORTESTPATHNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path d="M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4226C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0774C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z" fill="#FFA500"/>
        </svg>
    )
}

export function WALLNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4226C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0774C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z" fill="#484E5B"/>
        </svg>

    )
}

export function VISITEDNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4226C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0774C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z" fill="#1B8BCD"/>
        </svg>
    )
}

export function UNVISITEDNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.0622 2.92265C12.681 3.27992 13.0622 3.94017 13.0622 4.6547V9.3453C13.0622 10.0598 12.681 10.7201 12.0622 11.0774L8 13.4226C7.3812 13.7799 6.6188 13.7799 6 13.4226L1.93782 11.0774C1.31902 10.7201 0.937822 10.0598 0.937822 9.3453V4.6547C0.937822 3.94017 1.31902 3.27992 1.93782 2.92265L6 0.57735Z" fill="#282C34"/>
        </svg>

    )
}
export function STARTNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <circle cx="5.5" cy="5.5" r="5.5" fill="#45B857"/>
            <circle cx="5.50001" cy="5.49996" r="4.09732" fill="#262A33"/>
            <circle cx="5.49999" cy="5.49994" r="2.3255" fill="#45B857"/>
        </svg>

    )
}

export function ENDNode(props:React.SVGProps<SVGSVGElement>){
    return(
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <circle cx="5.5" cy="5.5" r="5.5" fill="#FF0000"/>
            <circle cx="5.50004" cy="5.49996" r="4.09731" fill="#262A33"/>
            <circle cx="5.50002" cy="5.50006" r="2.3255" fill="#FF0000"/>
        </svg>


    )
}

export function WEIGHTNode (props :React.SVGProps<SVGSVGElement>){
    return(
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
            <path d="M10.7393 10.2422C10.7393 12.7229 8.72832 14.0001 6.24765 14.0001C3.76698 14.0001 1.756 12.7229 1.756 10.2422C1.756 7.76153 3.76698 5.75055 6.24765 5.75055C8.72832 5.75055 10.7393 7.76153 10.7393 10.2422Z" fill="#8A68C3"/>
            <path d="M8.93822 8.86349C11.3753 6.24855 10.8283 4.06056 10.3168 3.50465C8.62692 1.30331 3.55714 1.70354 2.13405 3.50465C1.57815 4.20137 1.07562 6.24855 3.51267 8.86349" stroke="#8A68C3" strokeWidth="3"/>
            <path d="M3.80173 9.55287C3.44768 11.0339 3.63251 12.3243 3.15476 12.2101C2.677 12.0959 2.09129 10.6337 2.44535 9.15262C2.79941 7.67157 3.95916 6.73256 4.43692 6.84677C4.91468 6.96098 4.15579 8.07181 3.80173 9.55287Z" fill="white"/>
            <path d="M1.87261 3.70967C1.61038 4.16387 1.54732 4.5643 1.40081 4.47971C1.25429 4.39512 1.20186 3.89863 1.4641 3.44442C1.72633 2.99022 2.20136 2.79404 2.34787 2.87863C2.49439 2.96322 2.13484 3.25547 1.87261 3.70967Z" fill="white"/>
        </svg>

    )
}