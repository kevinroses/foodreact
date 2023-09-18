import MainApi from '../../../api/MainApi'

export const WalletApi = {
    walletList: (offset, type) => {
        console.log({ type })
        return MainApi.get(
            `/api/v1/customer/wallet/transactions?offset=${offset}&limit=10&type=${type}`
        )
    },
}
