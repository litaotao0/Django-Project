from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align: center">守望先锋</h1>'
    line2 = '<img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.7sTSeJzE9mlZ77PB1W7_WQHaFj?w=196&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" width=800>'
    line3 = '<hr>'
    line4 = '<a href="/play">进入游戏</a>'
    return HttpResponse(line1 + line4 + line3 + line2)

def play(request):
    line1 = '<h1 style="text-align: center">游戏界面</h1>'
    line2 = '<img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.6TCJ-dQmc2smu_Uk8TeIlAHaEH?w=300&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" width=800>'
    line3 = '<a href="/">返回主页面</a>'
    return HttpResponse(line1 + line3 + line2)
