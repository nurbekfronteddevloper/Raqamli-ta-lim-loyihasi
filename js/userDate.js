const toggleSidebar = () => document.body.classList.toggle("open");

        $(function () {
            var sidebar = $('.sidebar')
            sidebar.userSet = false

            $('.sidebar-toggle').on('click', function () {
                sidebar.toggleClass('hidden');
                sidebar.userSet = true
            });

            $(window).on('resize', function () {
                if (!sidebar.userSet) {
                    if (document.body.clientWidth >= 768) {
                        sidebar.removeClass('hidden');
                    } else {
                        sidebar.addClass('hidden');
                    }
                }
            })
        })
