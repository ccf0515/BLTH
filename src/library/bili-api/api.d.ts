import Request from '../request'
import { Live, LiveTrace, Main, Vc } from './response'

interface Requests {
  live: Request
  liveTrace: Request
  passport: Request
  main: Request
  vc: Request
  raw: Request
}

interface BapiMethods {
  live: {
    roomGiftConfig: (
      room_id?: number,
      area_parent_id?: number,
      area_id?: number,
      platform?: string
    ) => Promise<Live.RoomGiftConfig>
    doSign: () => Promise<Live.DoSign>
    getSignInfo: () => Promise<Live.GetSignInfo>
    fansMedalPanel: (page: number, page_size?: number) => Promise<Live.FansMedalPanel>
    sendMsg: (
      msg: string,
      room_id: number,
      room_type?: number,
      mode?: number,
      jumpfrom?: number,
      fontsize?: number,
      color?: number,
      bubble?: number,
      reply_mid?: number,
      reply_attr?: number,
      replay_dmid?: unknown,
      statistics?: { appId: number; platform: number }
    ) => Promise<Live.SendMsg>
    likeReport: (
      room_id: number,
      anchor_id: number,
      click_time?: number,
      visit_id?: string
    ) => Promise<Live.LikeReport>
    getInfoByRoom: (room_id: number) => Promise<Live.GetInfoByRoom>
    getUserTaskProgress: (target_id?: number) => Promise<Live.GetUserTaskProgress>
    userTaskReceiveRewards: (target_id?: number) => Promise<Live.UserTaskReceiveRewards>
    silver2coin: (visit_id?: string) => Promise<Live.Silver2coin>
    coin2silver: (num: number, platform?: string, visit_id?: string) => Promise<Live.Coin2silver>
    queryContributionRank: (
      ruid: number,
      room_id: number,
      page: number,
      page_size: number,
      type?: string,
      _switch?: string
    ) => Promise<Live.QueryContributionRank>
    wearMedal: (medal_id: number, visit_id?: string) => Promise<Live.WearMedal>
  }
  liveTrace: {
    E: (
      id: number[],
      device: string[],
      ruid: number,
      is_patch?: number,
      heart_beat?: any[],
      visit_id?: string
    ) => Promise<LiveTrace.E>
    X: (
      s: string,
      id: number[],
      device: string[],
      ruid: number,
      ets: number,
      benchmark: string,
      time: number,
      ts: number,
      visit_id?: string
    ) => Promise<LiveTrace.X>
  }
  main: {
    nav: () => Promise<Main.Nav>
    reward: () => Promise<Main.Reward>
    dynamicAll: (
      type: string,
      page?: number,
      timezone_offset?: number,
      features?: string
    ) => Promise<Main.DynamicAll>
    videoHeartbeat: (
      aid: string,
      cid?: string,
      realtime?: number,
      played_time?: number,
      real_played_time?: number,
      refer_url?: string,
      quality?: number,
      video_duration?: number,
      type?: number,
      sub_type?: number,
      play_type?: number,
      dt?: number,
      last_play_progress_time?: number,
      max_play_progress_time?: number,
      spmid?: string,
      from_spmid?: string,
      extra?: string
    ) => Promise<Main.VideoHeartbeat>
    share: (
      aid: string,
      source?: string,
      eab_x?: number,
      ramval?: number,
      ga?: number
    ) => Promise<Main.Share>
    coinAdd: (
      aid: string,
      num: number,
      select_like?: number,
      cross_domain?: boolean,
      eab_x?: number,
      ramval?: number,
      source?: string,
      ga?: number
    ) => Promise<Main.CoinAdd>
    videoRelation: (aid: string, bvid?: string) => Promise<Main.VideoRelation>
    vip: {
      myPrivilege: () => Promise<Main.Vip.MyPrivilege>
      receivePrivilege: (type: number, platform?: string) => Promise<Main.Vip.ReceivePrivilege>
      addExperience: () => Promise<Main.Vip.AddExperience>
    }
  }
  vc: {
    myGroups: (build?: number, mobi_app?: string) => Promise<Vc.MyGroups>
    signIn: (group_id: number, owner_id: number) => Promise<Vc.SignIn>
  }
}

export { Requests, BapiMethods }
