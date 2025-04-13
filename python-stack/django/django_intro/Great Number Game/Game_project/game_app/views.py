from django.shortcuts import render,redirect
import random
def index(request):
        if 'target' not in request.session:
                request.session['target']=random.randint(1, 100)
                request.session['attempts']=0
        
        if request.method == 'POST':
                request.session['attempts']+=1

                number= request.POST['number']
                request.session['number']=number
                if int(request.session['number'])<(request.session['target']):
                        # request.session['attempts']+=1
                        return redirect ('/low')
                elif int(request.session['number'])>request.session['target']:
                        # request.session['attempts']+=1
                        return redirect ('/high')
                elif int(request.session['number']) == request.session['target']:
                        # request.session['attempts']+=1
                        return redirect ('/corect')
                        
        return render(request,'index.html')
def low_ges(request):
        # if request.method == "POST":
        #         request.session['number']=random.randint(1, 100)
        #         if request.session['number']<random.randint(1, 100):
        #                 return redirect ('/low')
        # else:
                return render(request, 'too_low.html')
                
def high_ges(request):
        # request.session['number']=random.randint(1, 100)
        # if request.session['number']>random.randint(1, 100):
        #         return redirect ('/high')
        # else:
                return render(request,'too_high.html')
def corect_ges(request):
        # request.session['number']=random.randint(1, 100)
        # if request.session['number']==random.randint(1, 100):
        return render(request,'corect_gues.html')

def play_again(request):
        request.session.clear()
        return redirect('/')