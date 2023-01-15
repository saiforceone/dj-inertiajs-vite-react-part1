from inertia import inertia


@inertia('Home/Index')
def index(request):
    return {
        'contacts': ['Acid Burn', 'Crash Override', 'Lord Nikon'],
    }
