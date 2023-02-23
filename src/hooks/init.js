import { useRouteMap } from '@/router/route-hook'

function composeListData(list, callback) {
    return list.reduce((tabBarList, text, index) => {
        const result = callback(index, text)
        const item = {
            label: typeof text === 'object' ? text.text : text,
            icon: result.path,
        }
        if (typeof result.selectedPath !== 'undefined') {
            item.selectedIcon = result.selectedPath
        }
        Object.assign(item, result)
        return tabBarList.concat(item)
    }, [])
}

export const useTabBarData = () => {
    const routes = useRouteMap()
    const list = routes.map((e) => {
        const sort = e.meta.sort
        return {
            ...e,
            text: e.meta.title,
            url: e.path,
        }
    })
    return composeListData(list, (index, item) => ({
        path: require(`@/assets/images/tab${index + 1}.png`),
        selectedPath: require(`@/assets/images/tab${index + 1}-t.png`),
        url: item.path,
    }))
}

export const usePanelData = () => {
    const textList = ['总收入', '已提现', '积分']
    const priceList = ['999.00', '888.00', '666.00']

    return composeListData(textList, (index) => ({
        path: require(`@/assets/images/tticon-bg__${index + 1}.png`),
        price: priceList[index],
    }))
}

export const useGangnamData = () => {
    const textList = ['充值记录', '收入提现', '我的客户', '资金明细', '推广利润查看']

    return composeListData(textList, (index) => ({
        path: require(`@/assets/images/grid-icon__${index + 1}.png`),
    }))
}

export const useServiceTabData = () => {
    const textList = ['移动', '联通', '电信']

    return composeListData(textList, (index) => ({
        path: require(`@/assets/images/service-${index + 1}.png`),
        selectedPath: require(`@/assets/images/service-${index + 1}-t.png`),
    }))
}
