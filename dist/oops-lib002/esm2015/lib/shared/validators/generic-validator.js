export class GenericValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
            // return { minlength: {
            //         requiredLength: 10,
            //         actualLength: control.value.length
            //     }
            // };
        }
        return null;
    }
    // simulate Asynchronous operation
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'oopsmails') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    return resolve(null);
                }
            }, 2000);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiQzovb29wc21haWxzLzAwMS1vb3BzbWFpbHMtYW5ndWxhci1saWItdGVzdC9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3ZhbGlkYXRvcnMvZ2VuZXJpYy12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBd0I7UUFDaEQsSUFBSyxPQUFPLENBQUMsS0FBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNwQyx3QkFBd0I7WUFDeEIsOEJBQThCO1lBQzlCLDZDQUE2QztZQUM3QyxRQUFRO1lBQ1IsS0FBSztTQUNOO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBd0I7UUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQVEsRUFBRTtZQUMzQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7b0JBQ2pDLE9BQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7WUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljVmFsaWRhdG9yIHtcclxuICBzdGF0aWMgY2Fubm90Q29udGFpblNwYWNlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGlmICgoY29udHJvbC52YWx1ZSBhcyBzdHJpbmcpLmluZGV4T2YoJyAnKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiB7IGNhbm5vdENvbnRhaW5TcGFjZTogdHJ1ZSB9O1xyXG4gICAgICAvLyByZXR1cm4geyBtaW5sZW5ndGg6IHtcclxuICAgICAgLy8gICAgICAgICByZXF1aXJlZExlbmd0aDogMTAsXHJcbiAgICAgIC8vICAgICAgICAgYWN0dWFsTGVuZ3RoOiBjb250cm9sLnZhbHVlLmxlbmd0aFxyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBzaW11bGF0ZSBBc3luY2hyb25vdXMgb3BlcmF0aW9uXHJcbiAgc3RhdGljIHNob3VsZEJlVW5pcXVlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09PSAnb29wc21haWxzJykge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHNob3VsZEJlVW5pcXVlOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==